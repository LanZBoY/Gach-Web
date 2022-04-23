import { listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import getInstanceStorage from "../utils/firebaseAPI";
import Bar from "../components/Bar";
import PDFList from "../components/PDFList";
import { Button } from "react-bootstrap";

const PdfViewPage = () => {
  const [listFile, setListFile] = useState([]);
  const storage = getInstanceStorage();
  const listRef = ref(storage, "/PDF");

  function loadData() {
    listAll(listRef).then((res) => {
      setListFile(res.items);
    });
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
      <Button variant="success" className="me-2">
        上傳檔案
      </Button>
      {listFile.map((item) => {
        return <PDFList filename={item.name} key={item.name} />;
      })}
    </>
  );
};

export default PdfViewPage;
