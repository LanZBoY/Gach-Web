import { listAll, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useRef, useState } from "react";
import { getInstanceStorage } from "../utils/firebaseAPI";
import Bar from "../components/Bar";
import PDFFile from "../components/PDFFile";
import { Button, Container, Form } from "react-bootstrap";
import uploadIcon from "../assets/upload-file-icon.png";

const PdfViewPage = () => {
  const storage = getInstanceStorage();
  const [listFile, setListFile] = useState([]);
  const buttonUploadRef = useRef(null);
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

  function hadleClick() {
    buttonUploadRef.current.click();
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Bar />
      <Container
        style={{
          margin: "auto",
          marginTop: "15%",
          width: "75%",
          border: "3px solid green",
          padding: "10px",
        }}
      >
        <Form.Group controlId="formFile" className="row">
          <div className="col-6" style={{ padding: "10px" }}>
            <div className="row">
              <img src={uploadIcon} width="100px" height="400px"></img>
            </div>
            <div className="row">
              <Button onClick={hadleClick}>
                選擇檔案
                <Form.Control
                  type="file"
                  onChange={selectData}
                  className="form-control"
                  ref={buttonUploadRef}
                  style={{ display: "none" }}
                />
              </Button>
            </div>
            <div className="row">
              <Button onClick={uploadData} className="form-control">
                上傳檔案
              </Button>
            </div>
          </div>
          <div className="col-6">
            {listFile.map((item) => {
              return (
                <PDFFile
                  fileRef={item}
                  refreshData={loadData}
                  key={item.name}
                />
              );
            })}
          </div>
        </Form.Group>
      </Container>
    </>
  );
};

export default PdfViewPage;
