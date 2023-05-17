import React,{useEffect} from 'react'
import { Container, Accordion, Row, Col, Card,Form,Button} from 'react-bootstrap'

const Faq = () => {
  return (
      useEffect(() => {
          window.scrollTo(0, 0);
      }, []),
      (
      <Container className="my-4 mt-5 pt-5 d-flex align-items-center justify-content-center">
          <Row className="mt-4">
            <Col xs={12} sm={12} md={12} xl={12}>
                <Card className='p-2'>
                  <h3
                      className="text-center py-2"
                      style={{ backgroundColor: "grey", color: "white" }}
                  >
                     Popular Questions
                  </h3>
                  <Accordion>
                      <Accordion.Item eventKey="0" className='p-2'>
                          <Accordion.Header>1. What is the time for check-in?</Accordion.Header>
                          <Accordion.Body>
                              Standard check-in time is 2PM.
                          </Accordion.Body>
                      </Accordion.Item>
                              <Accordion.Item eventKey="8" className='p-2'>
                              <Accordion.Header>2. If someone arriving late?</Accordion.Header>
                              <Accordion.Body>
                                  Please give us a call if you're wanting to arrive after 7PM.
                              </Accordion.Body>
                          </Accordion.Item>
                              <Accordion.Item eventKey="1" className='p-2'>
                              <Accordion.Header>3. Do you have a restaurant?</Accordion.Header>
                          <Accordion.Body>
                                  Even though we don't have one, there's a variety of food options to choose from within the area. All are within walking distance.
                          </Accordion.Body>
                      </Accordion.Item>
                              <Accordion.Item eventKey="2" className='p-2'>
                                  <Accordion.Header>4. Is parking available on site? Is there a fee for parking?‏‏‎ ‎ ‏‏‎ ‎ ‏‏‎ ‎ </Accordion.Header>
                          <Accordion.Body>
                                  Every room has free parking in front of the room.
                          </Accordion.Body>
                      </Accordion.Item>
                              <Accordion.Item eventKey="3" className='p-2'>
                              <Accordion.Header>5. Any Outdoor Entertainment Area?</Accordion.Header>
                          <Accordion.Body>
                                  We have a garden with BBQ area.
                          </Accordion.Body>
                      </Accordion.Item>
                              <Accordion.Item eventKey="4" className='p-2'>
                          <Accordion.Header>6. Is there a gym available for guests to use?</Accordion.Header>
                          <Accordion.Body>
                                  We don't have a Gym, but there is a gym other side of the road in 1 minute distance.
                          </Accordion.Body>
                      </Accordion.Item>
                              <Accordion.Item eventKey="5" className='p-2'>
                          <Accordion.Header>7. What is the cancellation policy for reservations?</Accordion.Header>
                          <Accordion.Body>
                                  Cancellations must be made at least 48 hours prior to the check-in date and time. Cancellations received less than 48hours, the full amount for the first cancelled night will be charged.
                          </Accordion.Body>
                      </Accordion.Item>
                              <Accordion.Item eventKey="6" className='p-2'>
                              <Accordion.Header>8. How do I guarantee my booking?</Accordion.Header>
                              <Accordion.Body>
                                  Credit card details are required to secure room booking.
                              </Accordion.Body>
                          </Accordion.Item>
                              <Accordion.Item eventKey="7" className='p-2'>
                              <Accordion.Header>9. How close are you to the shops?</Accordion.Header>
                              <Accordion.Body>
                                  With our location being in the heart of Nanango, everywhere is within walking distance. 
                              </Accordion.Body>
                          </Accordion.Item>
                         
                  </Accordion>
                   </Card>
                  </Col>
                
        </Row>
    </Container>
  )
  )
}

export default Faq