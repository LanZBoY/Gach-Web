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
  const [selectFileInfo, setSelectFileInfo] = useState(
    <p className="text-center">尚未選擇檔案</p>
  );

  function loadData() {
    const listPDFRef = ref(storage, "/PDF");
    listAll(listPDFRef).then((res) => {
      setListFile(res.items);
    });
  }

  function selectData(event) {
    selectFile.current = event.target.files[0];
    setSelectFileInfo(
      <p className="text-center">點擊圖示上傳: {selectFile.current.name}</p>
    );
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
          borderStyle: "outset",
          border: "3px solid",
          padding: "10px",
        }}
      >
        <Form.Group controlId="formFile" className="row">
          <div className="col-6" style={{ padding: "10px" }}>
            <div className="row">
              <img
                onClick={uploadData}
                src={uploadIcon}
                width="100px"
                height="400px"
                alt="uploadIcon"
                title="點擊上傳圖片"
              ></img>
            </div>
            {selectFileInfo}
            <div className="row">
              <Button onClick={hadleClick} style={{ padding: "10px" }}>
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
