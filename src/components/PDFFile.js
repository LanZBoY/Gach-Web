import { getDownloadURL, deleteObject } from "firebase/storage";
import React from "react";
import "./PDFFile.css";
import { ButtonGroup, Button, Row, Col, Container } from "react-bootstrap";

const PDFFile = ({ fileRef, refreshData }) => {
  function openFile() {
    getDownloadURL(fileRef).then((url) => {
      window.open(url);
    });
  }

  function deleteFile() {
    deleteObject(fileRef).then(() => {
      refreshData();
      alert("刪除成功！！");
    });
  }

  return (
    <Row id="fileName" className="justify-content-md-center">
      <Col xs="8">{fileRef.name}</Col>
      <Col xs="4">
        <Button onClick={openFile}>開啟</Button>
        <Button variant="danger" onClick={deleteFile}>
          刪除
        </Button>
      </Col>
    </Row>
  );
};

export default PDFFile;
