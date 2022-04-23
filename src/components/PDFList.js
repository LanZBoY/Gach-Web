import React from "react";
import { ListGroupItem, Button } from "react-bootstrap";

const PDFList = ({ filename }) => {
  function openFile() {
    alert("OpenEvent");
  }

  return (
    <ListGroupItem
      action
      onClick={openFile}
      variant="primary"
      as={Button}
      className="rounded-pill"
    >
      {filename}
    </ListGroupItem>
  );
};

export default PDFList;
