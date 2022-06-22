import React, { useState, useEffect } from 'react'
import Bar from "../components/Bar";
import { firestore } from '../utils/firebaseAPI';
import { collection, getDocs } from 'firebase/firestore';
import Postview from '../components/PostView';
import { Button, Container, Form, Modal } from 'react-bootstrap';

const PostPage = () => {
  const [docs, setDocs] = useState([]);
  const [uploadDocs, setUploadDocs] = useState({
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const openAddModal = () =>{
    setShowAddModal(true)
  }
  const closeAddModal = () => {
    setShowAddModal(false)
  }

  function getPosts() {
    getDocs(collection(firestore, 'post')).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          item: doc.data()
        }
        setDocs((prev) => {
          return [...prev, data]
        })
      })
    })
  }

  function handleUploadDocChange(event){
    if(event.target.id === 'UploadTitle'){
      setUploadDocs((prev) => {
        prev.title = event.target.value
        return prev
      })
    }else if(event.target.id === 'UploadContent'){
      setUploadDocs((prev) => {
        prev.content = event.target.value
        return prev
      })
    }

  }

  function uploadDoc(){
    console.log(uploadDocs)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <Bar />
      <Button onClick={openAddModal}>新增</Button>
      <Container>
        {docs.map((item) => {
          return <Postview item={item.item} key={item.id} />
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
            <Form.Control id='UploadTitle' type='text' onChange={handleUploadDocChange}></Form.Control>
            <Form.Label>內容</Form.Label>
            <Form.Control as="textarea" id='UploadContent' type='text' onChange={handleUploadDocChange}></Form.Control>
          </Form>
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
