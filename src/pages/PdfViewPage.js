import { listAll, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import getInstanceStorage from "../utils/firebaseAPI";
import Bar from "../components/Bar";
import PDFList from "../components/PDFList";
import { Button } from "react-bootstrap";

const PdfViewPage = () => {
  const [listFile, setListFile] = useState([]);
  const storage = getInstanceStorage();

  function loadData() {
    const listPDFRef = ref(storage, "/PDF");
    listAll(listPDFRef).then((res) => {
      setListFile(res.items);
    });
  }

  function uploadData(event){
    const file = event.target.files[0]
    const uploadPDFRef = ref(storage, `/PDF/${file.name}`);
    uploadBytes(uploadPDFRef, file).then((snapshot) =>{
      loadData();
    })
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
      <input type='file' onChange={uploadData}/>
      {listFile.map((item) => {
        return <PDFList fileRef={item} key={item.name} />;
      })}
    </>
  );
};

export default PdfViewPage;
