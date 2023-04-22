import React from 'react'
import { Container, Accordion,Row,Col, Card,Form,Button} from 'react-bootstrap'

const Faq = () => {
  return (
      <Container className="my-4 mt-5 pt-5">
        <Row>
            <Col xs={12} sm={12} md={6} xl={6}>
                  <h3
                      className="text-center py-2"
                      style={{ backgroundColor: "grey", color: "white" }}
                  >
                     Popular Questions
                  </h3>
                  <Accordion>
                      <Accordion.Item eventKey="0">
                          <Accordion.Header>1. What time is check-in and check-out?</Accordion.Header>
                          <Accordion.Body>
                              NONE!
                          </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                          <Accordion.Header>2. Is breakfast included with the room rate?</Accordion.Header>
                          <Accordion.Body>
                              NONE!
                          </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                          <Accordion.Header>3.Is parking available on site? Is there a fee for parking?</Accordion.Header>
                          <Accordion.Body>
                              NONE!
                          </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                          <Accordion.Header>4. Are pets allowed at the motel? If so, is there an additional fee?</Accordion.Header>
                          <Accordion.Body>
                              NONE!
                          </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                          <Accordion.Header>5. Is there a pool or fitness center available for guests to use?</Accordion.Header>
                          <Accordion.Body>
                              NONE!
                          </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                          <Accordion.Header>6. What is the cancellation policy for reservations?</Accordion.Header>
                          <Accordion.Body>
                              NONE!
                          </Accordion.Body>
                      </Accordion.Item>
                  </Accordion>
            </Col>
              <Col xs={12} sm={12} md={6} xl={6}>
                  <h2
                      className="text-center py-2"
                      style={{ backgroundColor: "grey", color: "white" }}
                  >
                      Want to Ask Something?
                  </h2>

                  <Card className='py-3'>
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
                          <Button className="mx-auto" variant="danger">Book Now</Button>
                          </div>
                          </Form>
                  </Card>
              </Col>
        </Row>
    </Container>
  )
}

export default Faq