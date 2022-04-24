import { listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import getInstanceStorage from "../utils/firebaseAPI";
import Bar from "../components/Bar";
import PDFList from "../components/PDFList";
import { Button } from "react-bootstrap";

const PdfViewPage = () => {
  const [listFile, setListFile] = useState([]);
  const storage = getInstanceStorage();
  const listPDFRef = ref(storage, "/PDF");

  function loadData() {
    listAll(listPDFRef).then((res) => {
      setListFile(res.items);
    });
  }

  function uploadData(){

  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Bar />
      <Button onClick={loadData} className="me-2">
        重新整理
      </Button>
      <input title="uploadFile" type='file'/>
      {listFile.map((item) => {
        return <PDFList fileRef={item} key={item.name} />;
      })}
    </>
  );
};

export default PdfViewPage;
