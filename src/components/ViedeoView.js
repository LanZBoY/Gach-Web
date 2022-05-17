import React from "react";
import { Col, Row } from "react-bootstrap";
import videoTemp from "../assets/video/mov_bbb.mp4";
const Viedeoview = () => {
  return (
    <>
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
          <h4 className="text-center fw-bolder">兔兔花蝴蝶</h4>
          <video width="640px" height="400px" controls>
            <source src={videoTemp} type="video/mp4"></source>
          </video>
        </Col>
        <Col sm={4}></Col>
      </Row>
    </>
  );
};

export default Viedeoview;
