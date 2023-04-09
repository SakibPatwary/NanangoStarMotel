import React from "react";
import { Carousel, Row, Col, Form, Container, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://landuse.co.uk/wp-content/uploads/2021/05/services-South-Downs-Landscape-Character-Assessment-1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="py-2">
        <Container
          style={{ backgroundColor: "#3459e6", color: "white" }}
          className="py-5"
        >
          <Row>
            <Col>
              <Form.Label>Select Stay Date</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                placeholder="Date of Birth"
              />
            </Col>
            <Col>
              <Form.Label>Nights</Form.Label>
              <Form.Control type="number" />
            </Col>
            <Col>
              <Form.Label>Adults</Form.Label>
              <Form.Control type="number" />
            </Col>
            <Col>
              <Form.Label>Children</Form.Label>
              <Form.Control type="number" />
            </Col>
          </Row>
          <Row className="px-3 mt-3">
            <Button variant="danger" size="sm">
              Check Availability
            </Button>
          </Row>
        </Container>
      </div>

      <div className="py-2">
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height="400"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=+(nanango%20star%20motel)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/distance-area-calculator.html">
              measure area map
            </a>
          </iframe>
        </div>
      </div>
    </Container>
  );
};

export default Home;
