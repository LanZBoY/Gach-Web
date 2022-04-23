import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
const Bar = () => {
    return (
        <Navbar bg='secondary' variant='dark' expand="lg">
            <Container>
                <Navbar.Brand href="/">水利網頁</Navbar.Brand>
                <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className="me-auto">
                    <Nav.Link href="/">首頁</Nav.Link>
                    <NavDropdown title="其他功能" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/pdf_view">PDF檔案</NavDropdown.Item>
                        <NavDropdown.Item href="/photo">圖片檔案</NavDropdown.Item>
                        <NavDropdown.Item href="/video">影片專區</NavDropdown.Item>
                        {/* <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Bar;
