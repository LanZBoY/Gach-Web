import { Button, Col, Figure, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { storage } from "../utils/firebaseAPI";
import { ref, getDownloadURL } from "firebase/storage";
import "./PhotoView.css";
const Postview = ({id, item}) => {
  const [hideImg, setHideImg] = useState(false);
  const [imgURL, setimgURL] = useState(null);
  const createDate = new Date(item.createTime.toMillis());
  useEffect(() => {
    if(item.photoPath === undefined){
      setHideImg(true)
      return;
    }
    const pathRef = ref(storage, "Photo/" + item.photoPath);
    getDownloadURL(pathRef).then((url) => {
      setimgURL(url);
    });
  }, [item.photoPath]);

  function deleteDoc(){
    console.log(item)
  }

  return (
    <>
      <Row className="post">
        <Col sm={9}>
          <Row className="postTitle">
            <h2>{item.title}</h2>
          </Row>
          <Row className="postContent">
            <p>{item.content}</p>
          </Row>
        </Col>
        <Col sm={3} hidden={hideImg}>
          <Figure.Image width={300} height={300} src={imgURL}></Figure.Image>
          <Figure.Caption>{`${createDate.getFullYear()}-${createDate.getDate()}-${createDate.getDay()} ${createDate.getHours()}:${createDate.getMinutes()}:${createDate.getSeconds()} 上傳`}</Figure.Caption>
          <Button onClick={deleteDoc} variant="danger">刪除</Button>
        </Col>
      </Row>
    </>
  );
};

export default Postview;
