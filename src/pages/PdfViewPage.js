import { listAll, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useRef, useState } from "react";
import { getInstanceStorage } from "../utils/firebaseAPI";
import Bar from "../components/Bar";
import PDFFile from "../components/PDFFile";
import { Button, Form } from "react-bootstrap";

const PdfViewPage = () => {
  const storage = getInstanceStorage();
  const [listFile, setListFile] = useState([]);
  const selectFile = useRef();
  function loadData() {
    const listPDFRef = ref(storage, "/PDF");
    listAll(listPDFRef).then((res) => {
      setListFile(res.items);
    });
  }

  function selectData(event) {
    selectFile.current = event.target.files[0];
  }

  function uploadData() {
    if (selectFile.current === undefined) {
      alert("尚未選擇檔案");
      return;
    }
    const uploadPDFRef = ref(storage, `/PDF/${selectFile.current.name}`);
    uploadBytes(uploadPDFRef, selectFile.current).then(() => {
      loadData();
      alert("上傳完成！！");
    });
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Bar />
      <Form.Group controlId="formFile">
        <Form.Control type="file" onChange={selectData} size="sm" />
      </Form.Group>
      <Button onClick={uploadData} className="me-2">
        上傳檔案
      </Button>
      {listFile.map((item) => {
        return (
          <PDFFile fileRef={item} refreshData={loadData} key={item.name} />
        );
      })}
    </>
  );
};

export default PdfViewPage;
