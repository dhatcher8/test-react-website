import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './App.css';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {"Drew's Site"}
        </Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>

      <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>

      {/* <Container>
        <Row className="show-grid text-center">
          <Col xs={4} s={4} className="person-wrapper">
            <div class="image-cropper">
              <Image src={require("./assets/mountain1.jpg")} className="individual-pic"/>
            </div>
          </Col>
          <Col xs={4} s={4} className="person-wrapper">
            <div class="image-cropper">
              <Image src={require("./assets/mountain1.jpg")} className="individual-pic"/>
            </div>
          </Col>
          <Col xs={4} s={4} className="person-wrapper">
            <div class="image-cropper">
              <Image src={require("./assets/mountain1.jpg")} className="individual-pic"/>
            </div>
          </Col>
        </Row>
      </Container> */}

      <Container>
        <Row className="show-grid text-center">
          <Col xs={4} s={4} className="person-wrapper">
            <Image src={require("./assets/mountain1.jpg")}  roundedCircle className="profile-pic"/>
          </Col>
          <Col xs={4} s={4} className="person-wrapper">
            <Image src={require("./assets/mountain1.jpg")} roundedCircle className="profile-pic"/>
          </Col>
          <Col xs={4} s={4} className="person-wrapper">
            <Image src={require("./assets/mountain1.jpg")} roundedCircle className="profile-pic"/>
          </Col>
        </Row>
      </Container>

      <div>
        <h1>Welcome</h1>
        <Button variant="outline-danger">Danger</Button>
      </div>
    </>
    
    
  );
}

export default App;
