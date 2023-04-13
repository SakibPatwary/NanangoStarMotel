import React from "react";
import { Card, Row, Col, Form, Container, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container>

      {/* Navbar */}
        <div
          style={{
            minHeight: '60vh',
          backgroundImage: 'url("https://media.cntraveler.com/photos/5ad7814da7bf5433095d6490/16:9/w_2560,c_limit/Austin-Motel---Exteriors---Nick-Simonite.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className='d-flex justify-content-center align-items-center'
        >
          <Card style={{ backgroundColor: "#3459e6" }} className='text-center w-75 shadow bg-light'>
            <Card.Header>
              CHECK ROOM AVAILABILITY
            </Card.Header>
            <div className="py-4 px-2">
              <Row>
                <Col sm={12} md={6} lg={3}>
                  <Form.Label>Select Check in Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                  />
                </Col>
              <Col sm={12} md={6} lg={3}>
                <Form.Label>Select Check out Date</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                />
              </Col>
              <Col sm={4} md={4} lg={2}>
                  <Form.Label>Nights</Form.Label>
                  <Form.Control type="number" />
                </Col>
              <Col sm={4} md={4} lg={2}>
                  <Form.Label>Adults</Form.Label>
                  <Form.Control type="number" />
                </Col>
              <Col sm={4} md={4} lg={2}>
                  <Form.Label>Children</Form.Label>
                  <Form.Control type="number" />
                </Col>
              </Row>
              <Row className="px-3 mt-3">
                <Button variant="danger" size="sm">
                  Check Availability
                </Button>
              </Row>

            </div>
          </Card>
        </div>

      <div className="py-2">
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height="400"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=+(nanango%20star%20motel)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/distance-area-calculator.html">
            </a>
          </iframe>
        </div>
      </div>
    </Container>
  );
};

export default Home;
