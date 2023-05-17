import React from 'react'
import {
    Container,
    Col,
    Card, Row, Button
} from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import { LinkContainer } from "react-router-bootstrap";
import Carousel from "react-multi-carousel";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const reviews = [
    {
        id: 1,
        name: 'Fiona Olsen',
        placeInfo: 'Absolutely awesome motel. Rooms are very clean. Lovely gentleman  in reception was very welcoming. I highly recommend this motel.'
    },
    {
        id: 2,
        name: 'Neil McGuire',
        placeInfo: 'For a small town hotel they have delivered fantastically, the beds are comfortable, the rooms are well appointed and stocked with the simple items you need.'
    },
    {
        id: 3,
        name: 'Gabrielle Cavanagh',
        placeInfo: 'Great place in a very convenient location. Our room was very clean and hygienic. Even though we checked in late, reception staff member was friendly.'
    },
    {
        id: 4,
        name: 'Robbie Clarke',
        placeInfo: 'Great value motel.  Good location at the centre of Nanago.  Very friendly manager who is doing a good job running the motel.'
    },
    {
        id: 5,
        name: 'Anita McGovern',
        placeInfo: 'The room was very comfortable,  clean and the shower was fabulous - Nice and hot. Staff friendly and helpful we will certainly stay there again.'
    },
    {
        id: 6,
        name: 'Mark Regan',
        placeInfo: 'Great little motel. Friendly staff, sweet little dog named Anna is friendly too.  Clean and tidy, quiet spot. '
    },
]


const Feedback = (deviceType) => {
    return (
        <Container className='pb-4'>
            <h2
                className="text-center py-2"
                style={{ backgroundColor: "#5A9BF1", color: 'white', fontWeight: 'bold' }}
            >
                CLIENTS FEEDBACK
            </h2>

            <Carousel
                responsive={responsive}
                transitionDuration={500}
                autoPlay={deviceType !== "mobile" ? true : false}
                autoPlaySpeed={5000}
                deviceType={deviceType}
                infinite={true}
                ssr={true}
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            >
                {reviews.map((review) => (
                    <Col className='px-2'>
                        <Card className="cursorAll rounded-4" style={{ minHeight: '180px', backgroundColor: '#d1cfcf' }}>
                            <Row>
                                <Col xs={4} sm={4} md={4} lg={4}>
                                    <Card.Img
                                        className='ps-3 pt-3 d-flex'
                                        style={{ borderRadius: '50%' }}
                                        src='./img/thumb.png'
                                    />
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8}>
                                    <Card.Title className='pt-3 pe-3' style={{ fontWeight: 'bold' }}>{review.name}</Card.Title>
                                    <Card.Text as='h6' className='pb-2 pe-3' style={{ textAlign: 'justify' }}>{review.placeInfo}</Card.Text>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Carousel>
        </Container>
    )
}

export default Feedback;