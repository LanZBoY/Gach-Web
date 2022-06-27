import React, { useState, useEffect } from "react";
import Bar from "../components/Bar";
import { firestore, storage } from "../utils/firebaseAPI";
import { collection, getDocs, Timestamp, addDoc, getDoc, doc} from "firebase/firestore";
import Postview from "../components/PostView";
import { Button, Container, Form, Modal, Figure } from "react-bootstrap";
import { ref, uploadBytes } from "firebase/storage";

const PostPage = () => {
  const [docs, setDocs] = useState([]);
  const [uploadDocs, setUploadDocs] = useState({});
  const [uploadPhoto, setUploadPhoto] = useState(undefined);
  const [hidePreviewImg, setHidePreviewImg] = useState(true);
  const [previewImgURL, setPreviewImgURL] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const openAddModal = () => {
    setShowAddModal(true);
  };
  const closeAddModal = () => {
    setUploadDocs({});
    setPreviewImgURL(null);
    setHidePreviewImg(true);
    setShowAddModal(false);
  };

  function getPosts() {
    getDocs(collection(firestore, "post")).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          item: doc.data(),
        };
        setDocs((prev) => {
          return [...prev, data];
        });
      });
    });
  }

  async function uploadDoc() {
    // 純文檔部分新增功能
    uploadDocs.createTime = Timestamp.fromDate(new Date());
    // 圖片上傳功能
    if(uploadPhoto !== undefined){
      console.log(uploadPhoto);
      uploadDocs.photoPath = uploadPhoto.name;
      const uploadPhotoRef = ref(storage, `/Photo/${uploadPhoto.name}`);
      const uploadResult = await uploadBytes(uploadPhotoRef, uploadPhoto);
      console.log(uploadResult);
    }
    const postCollection = collection(firestore, "post");
    const result = await addDoc(postCollection, uploadDocs);
    const docRef = doc(firestore, "post", result.id);
    const newDoc = await getDoc(docRef);
    if(newDoc.exists()){
      const data = {
        id: newDoc.id,
        item: newDoc.data(),
      };
      setDocs((prev) => {
        return [data, ...prev];
      })
    }
    closeAddModal();
  }

  function handleUploadDocChange(event) {
    if (event.target.id === "UploadTitle") {
      setUploadDocs((prev) => {
        prev.title = event.target.value;
        return prev;
      });
    } else if (event.target.id === "UploadContent") {
      setUploadDocs((prev) => {
        prev.content = event.target.value;
        return prev;
      });
    } else if (event.target.id === "UploadFile") {
      const file = event.target.files[0];
      if (file !== undefined) {
        setUploadPhoto(file);
        const fileReader = new FileReader();
        fileReader.onload = function () {
          setPreviewImgURL(this.result);
        };
        fileReader.readAsDataURL(file);
        setHidePreviewImg(false);
      }
    }
  }
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Bar />
      <Button onClick={openAddModal}>新增</Button>
      <Container>
        {docs.map((item) => {
          return <Postview id={item.id} item={item.item} key={item.id} />;
        })}
      </Container>
      {/* 上傳貼文 */}
      <Modal show={showAddModal} onHide={closeAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>新增貼文</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>標題</Form.Label>
            <Form.Control
              id="UploadTitle"
              type="text"
              onChange={handleUploadDocChange}
            ></Form.Control>
            <Form.Label>內容</Form.Label>
            <Form.Control
              as="textarea"
              id="UploadContent"
              type="text"
              onChange={handleUploadDocChange}
            ></Form.Control>
            <Form.Label>上傳圖片</Form.Label>
            <Form.Control
              id="UploadFile"
              type="file"
              size="lg"
              onChange={handleUploadDocChange}
            ></Form.Control>
          </Form>
          <Figure.Image
            id="PreviewImg"
            hidden={hidePreviewImg}
            width={300}
            height={300}
            src={previewImgURL}
          ></Figure.Image>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeAddModal}>取消</Button>
          <Button onClick={uploadDoc}>確定</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostPage;
