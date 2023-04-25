import React from 'react'
import { Card, Container,Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const places = [
  {
    id: 1,
    imageSrc: './img/places/1.png',
    placeName: 'Visit Ringsfield House',
    placeInfo: 'This beautiful historical homestead has been preserved and restored over the years and is open for tours.'
  },
  {
    id: 2,
    imageSrc: '/img/places/2.png',
    placeName: 'Explore Pioneer Park',
    placeInfo: 'Pioneer Park features a variety of heritage buildings and displays that showcase the towns history and culture.'
  },
  {
    id: 3,
    imageSrc: '/img/places/3.png',
    placeName: 'Take a hike in Mount Wooroolin National Park',
    placeInfo: 'The park features several walking trails that offer stunning views of the surrounding countryside.'
  },
  {
    id: 9,
    imageSrc: '/img/places/9.png',
    placeName: 'Coomba Falls',
    placeInfo: 'Coomba Falls is a beautiful swimming hole located about 15 km from Nanango. Its a great place to cool off on a hot day.'
  },
]

const Place = () => {
  return (
    <Container className="my-4 pb-3">
      <h2
        className="text-center py-2"
        style={{ backgroundColor: "#5A9BF1"}}
      >
        THINGS TO DO IN NANANGO
      </h2>
      <Row>
        {places.map((place) => (
          <Col xs={12} md={6} lg={3} className='pb-2'>
            <Card className="text-black text-center shadow" style={{ minHeight: '380px', backgroundColor: '#d1cfcf' }}>
              <Card.Img
                className='p-2'
                style={{ borderRadius: '15px' }}
                src={place.imageSrc} />
              <Card.Title className='py-2 px-2'>{place.placeName}</Card.Title>
              <Card.Text className='px-2' style={{ textAlign: 'justify' }}>{place.placeInfo}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>

      <Container>
      <Row>
        <LinkContainer to="/places">
          <Button variant="dark" size="sm" className="rounded">
            <b>View All Popular Places</b>
          </Button>
        </LinkContainer>
      </Row>
      </Container>
    </Container>
  )
}

export default Place