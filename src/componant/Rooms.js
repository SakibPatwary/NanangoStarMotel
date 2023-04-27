import React,{useEffect} from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const Rooms = () => {
  return (
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    (
    <Container className="my-4 mt-5 pt-5">
      <h1
        className="text-center pt-4"
      >
        Accomodation with Details
      </h1>
      <div className='py-2 text-start' >
      <Card>
        <Row>
            <Col xs={12} sm={12} md={6} xl={6}>
            <Card.Img
              className='p-2 rounded-4'
                src='./img/room/3.png'/>
          </Col>
          <Col md={6} xl={6} className='p-4'>
            <Card.Title>Queen Room</Card.Title>
              <Card.Text>Queen Beds with private bathroom and toilet. Free parking in front of the room and WIFI.</Card.Text>
              <Card.Text>✅Air-conditioning ✅WiFi ✅Cable television ✅Hairdryer ✅Microwave</Card.Text>
              
              <div>
                <a href="https://hotels.cloudbeds.com/reservation/spR72T" target="_blank" rel="noopener noreferrer">
            <Button className="mx-auto" variant="danger">Book Now</Button>
                </a>
              </div>
          </Col>
          </Row>
          </Card> 
          </div>
      <div className='py-2'>
        <Card>
          <Row>

            <Col xs={12} sm={12} md={6} xl={6} className='p-4 text-end'>
              <Card.Title>Family/Queen Twin Share</Card.Title>
              <Card.Text>Family or Twin share room with one Queen and one single bed. Free Parking in front of the room. Free toiletries, coffee, tea with all the rooms.</Card.Text>
              <Card.Text>✅Air-conditioning ✅WiFi ✅Hairdryer ✅Microwave</Card.Text>

                  <div>
                    <a href="https://hotels.cloudbeds.com/reservation/spR72T" target="_blank" rel="noopener noreferrer">
              <Button className="mx-auto" variant="danger">Book Now</Button>
                    </a>
                  </div>
            </Col>            
            <Col md={6} xl={6}>
              <Card.Img
                className='p-2 rounded-4'
                src='./img/room/2.png' />
            </Col>
          </Row>
        </Card>
      </div>
      
    </Container>
    )
  )
}

export default Rooms