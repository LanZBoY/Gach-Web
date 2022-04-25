import { getDownloadURL } from "firebase/storage";
import React from "react";
import { ListGroupItem, Button } from "react-bootstrap";

const PDFList = ({ fileRef }) => {
  function openFile() {
    getDownloadURL(fileRef).then((url) => {
      window.open(url);
    });
  }

  return (
    <ListGroupItem
      action
      onClick={openFile}
      variant="primary"
      as={Button}
      className="rounded-pill"
    >
      {fileRef.name}
    </ListGroupItem>
  );
};

export default PDFList;
