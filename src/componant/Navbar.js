import React, { useState } from "react";
import { Card, Row, Col, Form, Container, Button } from "react-bootstrap";
import { toast } from 'react-toastify'
import Moment from 'moment'



const Navbar = () => {

  const [checkoutDate, setCheckoutDate] = useState("");
  const [checkInDate, setCheckInDate] = useState("");

  return (
    <Container>
      <div
        style={{
          minHeight: '70vh',
          backgroundImage: 'url("./img/navbar.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='d-flex justify-content-center align-items-end pb-5'
      >
        <Card style={{ backgroundColor: "#3459e6" }} className='text-center w-75 shadow bg-light'>
          <Card.Header>
            CHECK ROOM AVAILABILITY
          </Card.Header>
          <div className="py-4 px-2" >
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} className="pb-2 cursorAll">
                <Form.Label>Check in Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Check in Date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} className="pb-2">
                <Form.Label>Check out Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Check Out Date"
                  value={checkoutDate}
                  onChange={(e) => setCheckoutDate(e.target.value)}
                />
              </Col>
              {/* <Col xs={4} sm={4} md={4} lg={2} className="pb-2">
                  <Form.Label>Nights</Form.Label>
                  <Form.Control type="number" />
                </Col>
              <Col xs={4} sm={4} md={4} lg={2} className="pb-2">
                  <Form.Label>Adults</Form.Label>
                  <Form.Control type="number" />
                </Col>
              <Col xs={4} sm={4} md={4} lg={2} className="pb-2">
                  <Form.Label>Children</Form.Label>
                  <Form.Control type="number"/>
                </Col> */}
            </Row>
            <Row className="px-3 mt-3">
              <a style={{ textDecoration: 'none' }}

                href={`https://hotels.cloudbeds.com/reservation/spR72T#checkin=${Moment(
                  checkInDate
                ).format('YYYY-MM-DD')}&checkout=${Moment(
                  checkoutDate
                ).format('YYYY-MM-DD')}`}

                onClick={(e) => {
                  if (!checkInDate || !checkoutDate) {
                    e.preventDefault()
                    toast.error('Please fill all the fields required', {
                      position: 'top-center',
                    })
                  }
                }}
              >
                <Button variant="success" size="sm">
                  Check Availability
                </Button>
              </a>
            </Row>

          </div>
        </Card>
      </div>


    </Container>
  );
};

export default Navbar;
