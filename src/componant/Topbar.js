import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
  Container,
  Navbar,
  Nav,
  Button,
} from "react-bootstrap";

const Topbar = () => {
  return (
    <Navbar className="navbar navbar-dark bg-primary fixed-top" expand="lg">
      <Container>

        <LinkContainer to="/">
        <Navbar.Brand>
          <img style={{ maxWidth: "100px" }} src="/img/logo.png"></img>
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 align-items-center" navbarScroll>
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/rooms">ROOMS</Nav.Link>
            <Nav.Link href="#action3">FAQ</Nav.Link>
            <Nav.Link href="#action4">LOCAL AREA</Nav.Link>
            <Nav.Link href="#action5">FACILITIES</Nav.Link>
            <Nav.Link href="#action6">CONTACT US</Nav.Link>
          </Nav>

          <div className="text-center">
            <Button className="mx-auto" variant="danger">Book Now</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
