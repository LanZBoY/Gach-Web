import React from "react";
import LoGo from "../assets/logo.jpg";
import { Container, Navbar, Nav } from "react-bootstrap";

const Bar = () => {
  return (
    <>
      <Navbar bg="secondary" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img src={LoGo} width="30px" height="30px" />
            水利網頁
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">首頁</Nav.Link>
              <Nav.Link href="/pdf_view">PDF檔案</Nav.Link>
              <Nav.Link href="/photo">圖片檔案</Nav.Link>
              <Nav.Link href="/video">影片專區</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Bar;
