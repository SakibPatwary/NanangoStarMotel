import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

const Topbar = () => {
  return (
    <Navbar collapseOnSelect className="navbar navbar-dark fixed-top" expand="lg" style={{ backgroundColor:'#5A9BF1'}}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img style={{ maxWidth: "100px" }} src="/img/logo.png" alt='logo'></img>
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 align-items-center" navbarScroll>
            <LinkContainer to="/">
              <Nav.Link>HOME</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/rooms">
              <Nav.Link>ROOMS</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/places">
              <Nav.Link>LOCAL AREA</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/gallery">
              <Nav.Link>GALLERY</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/FAQ">
              <Nav.Link>FAQ</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>CONTACT US</Nav.Link>
            </LinkContainer>
          </Nav>

          <div className="text-center">
            <a href="https://hotels.cloudbeds.com/reservation/spR72T" target="_blank" rel="noopener noreferrer">
              <Button className="mx-auto" variant="danger">
                Book Now
              </Button>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
