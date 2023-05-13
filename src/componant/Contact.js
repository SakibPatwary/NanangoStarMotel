import React, { useEffect, useRef, useState } from 'react'
import { Container, Accordion, Row, Col, Card, Form, Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {

      setIsLoading(false);
      setIsSent(true);
    }, 2000);

    emailjs
      .sendForm(
        "service_gfmwuks",
        "template_vgis21i",
        form.current,
        "7AoPx5yHyJm_X2h59"
      )

    e.target.reset();

      
  };

  let buttonText = "Send Message";
  if (isLoading) {
    buttonText = "Sending...";
  } else if (isSent) {
    buttonText = "Message Sent Succenfully";
  }

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
              <Form ref={form} onSubmit={sendEmail}>
                <Row className="mb-3 px-3" >
                  <Form.Group controlId="validationCustom01">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Your Name"
                      name="name" 
                      id="name"
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3 px-3" >
                  <Form.Group controlId="validationCustom01">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Your Email Address"
                      name="email" 
                      id="email"
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3 px-3" >
                  <Form.Group controlId="validationCustom01">
                    <Form.Label>Message/ Question</Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      placeholder="Your Message or Question"
                      id="message"
                      name="message" 
                    />
                  </Form.Group>
                </Row>
                <div className='text-center'>
                  <Button type="submit" disabled={isLoading || isSent} value="send" id="form_button" className="mx-auto m-1" variant="danger">{buttonText}</Button>
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