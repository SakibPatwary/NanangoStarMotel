import React from 'react'
import { Container, Row, Col, Card,Button } from 'react-bootstrap'

const Rooms = () => {
  return (
    <Container className="my-4 mt-5 pt-5">
      <h1
        className="text-center py-2"
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
            <Card.Title>Standard Room</Card.Title>
            <Card.Text> One queen bed or two single beds, ensuite bathroom, air conditioning, TV, minibar, tea\coffee making facilities.</Card.Text>
            <Button className="mx-auto" variant="danger">Book Now</Button>
          </Col>
          </Row>
          </Card> 
          </div>
      <div className='py-2'>
        <Card>
          <Row>

            <Col xs={12} sm={12} md={6} xl={6} className='p-4 text-end'>
              <Card.Title>Deluxe Room</Card.Title>
              <Card.Text>One king bed or two queen beds, larger space, ensuite bathroom with spa bath, air conditioning, TV, minibar, tea/coffee making facilities, balcony.</Card.Text>
              <Button className="mx-auto" variant="danger">Book Now</Button>
            </Col>            
            <Col md={6} xl={6}>
              <Card.Img
                className='p-2 rounded-4'
                src='./img/room/2.png' />
            </Col>
          </Row>
        </Card>
      </div>
      <div className='py-2 text-start'>
        <Card>
          <Row>
            <Col md={6} xl={6}>
              <Card.Img
                className='p-2 rounded-4'
                src='./img/room/1.png'/>
            </Col>
            <Col xs={12} sm={12} md={6} xl={6} className='p-4'>
              <Card.Title>Family Room</Card.Title>
              <Card.Text> One queen bed and two single beds or two queen beds, ensuite bathroom, air conditioning, TV, minibar, tea/coffee making facilities, microwave, toaster, dining table and chairs.</Card.Text>
              <Button className="mx-auto" variant="danger">Book Now</Button>
            </Col>
          </Row>
        </Card>
      </div>
      <div className='py-2'>
        <Card>
          <Row>

            <Col xs={12} sm={12} md={6} xl={6} className='p-4 text-end'>
              <Card.Title>Budget Room</Card.Title>
              <Card.Text>One double bed or two single beds, shared bathroom, air conditioning, TV, minibar, tea/coffee making facilities.</Card.Text>
              <Button className="mx-auto" variant="danger">Book Now</Button>
            </Col>
            <Col md={6} xl={6}>
              <Card.Img
                className='p-2 rounded-4'
                src='./img/room/4.png' />
            </Col>
          </Row>
        </Card>
      </div>
      
    </Container>
  )
}

export default Rooms