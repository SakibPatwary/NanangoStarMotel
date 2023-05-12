import React, { useEffect } from 'react'
import { Container, Accordion, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { FaPhoneAlt, FaLocationArrow } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const Contact = () => {
  return (
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    (
      <Container className="my-4 mt-5 pt-5">
        <Row className="mt-4">
          <Col xs={12} sm={12} md={6} xl={6} className='p-2'>
            <h3
              className="text-center py-2"
              style={{ backgroundColor: "grey", color: "white", fontWeight: 'bold' }}
            >
              Contact Details
            </h3>
            <Card >

              <Card className='m-2 text-center' style={{ backgroundColor:'#e0e0de'}}>
                <Card.Body>
                    <Row>
                    <Col> 
                      <Card.Title style={{ fontWeight: 'bold' }}>PHONE</Card.Title>
                      <Card.Title as='h5'>(07) 4163 1666</Card.Title></Col>
                   </Row>
                  
                  </Card.Body>
                </Card>
              <Card className='m-2 text-center' style={{ backgroundColor: '#e0e0de' }}>
                <Card.Body>
                  <Row>
                    <Col> 
                      <Card.Title style={{ fontWeight: 'bold' }}>EMAIL</Card.Title>
                      <Card.Title as='h5'>nanangostar@gmail.com</Card.Title></Col>
                  </Row>

                </Card.Body>
              </Card>

              <Card className='m-2 text-center' style={{ backgroundColor: '#e0e0de' }}>
                <Card.Body>
                  <Row>
                    <Col> 
                      <Card.Title style={{ fontWeight: 'bold' }}>ADDRESS</Card.Title>
                      <Card.Title>43 Drayton Street, Nanango, QLD <br />4615 Australia</Card.Title></Col>
                  </Row>

                </Card.Body>
              </Card>
          
          
            </Card>
          </Col>

          <Col xs={12} sm={12} md={6} xl={6} className='p-2'>
            <h3
              className="text-center py-2"
              style={{ backgroundColor: "grey", color: "white", fontWeight: 'bold' }}
            >
              Send Message
            </h3>

            <Card className='py-3' style={{ backgroundColor: '#e0e0de' }}>
              <Form>
                <Row className="mb-3 px-3" >
                  <Form.Group controlId="validationCustom01">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Your Name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3 px-3" >
                  <Form.Group controlId="validationCustom01">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Your Email Address"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3 px-3" >
                  <Form.Group controlId="validationCustom01">
                    <Form.Label>Message/ Question</Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      placeholder="Your Message or Question"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <div className='text-center'>
                  <Button className="mx-auto m-1" variant="danger">Send Message</Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  )
}

export default Contact