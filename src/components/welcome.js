import './Welcome.css'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';

function Welcome() {
    return(
      <>
        <div class="demo-top-bar">
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
        </div>
        <div class="container">
            <Image src={require("../assets/NoahSunburst.jpg")} className="bg"/>
            <div class="centered">
                <p>I am vertically and horizontally centered. </p>
                <Button onClick={() => { goHome() }} variant="outline-light" size="sm" >Enter</Button>
                <Button eventKey={1} componentClass={Link} href="/" to="components/Home" variant="outline-light" size="lg" >Enter2</Button>
                <Button onClick="location.href='http://www.google.com'" type="button" variant="outline-light" >Enter3</Button>
                <Link to="/components/Home">
                    <Button renderAs="button">
                        <span>Enter4</span>
                    </Button>
                </Link>
                
            </div>
        </div>
      </>
    )
}

function goHome() {
    return (
        <>
            <Router>
            <div>
                <Route exact component={Home} />
            </div>
            </Router>
       </>
    )
}

export default Welcome;