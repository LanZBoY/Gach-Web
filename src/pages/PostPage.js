import React, { useState, useEffect } from "react";
import Bar from "../components/Bar";
import { firestore } from "../utils/firebaseAPI";
import { collection, getDocs } from "firebase/firestore";
import Postview from "../components/PostView";
import { Button, Container, Form, Modal, Figure } from "react-bootstrap";

const PostPage = () => {
  const [docs, setDocs] = useState([]);
  const [uploadDocs, setUploadDocs] = useState({});
  const [hidePreviewImg, setHidePreviewImg] = useState(true);
  const [previewImgURL, setPreviewImgURL] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const openAddModal = () => {
    setPreviewImgURL(null);
    setUploadDocs({});
    setHidePreviewImg(true);
    setShowAddModal(true);
  };
  const closeAddModal = () => {
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
        setUploadDocs((prev) => {
          prev.file = file;
          return prev;
        });
        const fileReader = new FileReader();
        fileReader.onload = function () {
          setPreviewImgURL(this.result);
        };
        fileReader.readAsDataURL(file);
        setHidePreviewImg(false);
      }
    }
  }

  function uploadDoc() {
    console.log(uploadDocs);
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
          return <Postview item={item.item} key={item.id} />;
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
