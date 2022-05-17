import { getDownloadURL } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./PhotoView.css";
const Photoview = ({ item }) => {
  const [url, setURL] = useState("");

  useEffect(() => {
    getDownloadURL(item).then((downloadURL) => {
      setURL(downloadURL);
    });
  }, []);

  return (
    <>
      <Row className="photoList justify-content-md-center">
        <Col sm={3}></Col>
        <Col>
          <figure className="figure">
            <img
              id="photo"
              src={url}
              className="figure-img img-fluid rounded"
            ></img>
            <figcaption className="figure-caption text-center ">
              {item.name}
            </figcaption>
          </figure>
        </Col>
        <Col sm={3}></Col>
      </Row>
    </>
  );
};

export default Photoview;
