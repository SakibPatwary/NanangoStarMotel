import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Button,
} from "react-bootstrap";

const Topbar = () => {
  return (
    <Navbar className="navbar navbar-dark bg-primary" expand="lg">
      <Container>

        <Navbar.Brand>
          <img style={{ maxWidth: "100px" }} src="/img/logo.png"></img>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1">HOME</Nav.Link>
            <Nav.Link href="#action2">ROOMS</Nav.Link>
            <Nav.Link href="#action3">FAQ</Nav.Link>
            <Nav.Link href="#action4">LOCAL AREA</Nav.Link>
            <Nav.Link href="#action5">FACILITIES</Nav.Link>
            <Nav.Link href="#action6">CONTACT US</Nav.Link>
          </Nav>
          <Button variant="danger">Book Now</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
