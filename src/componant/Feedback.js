import React from 'react'
import {
    Container,
    Row,
    Col,
    Card,
} from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
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
        placeInfo: 'The motel was clean and comfortable, with a great location.'
    },
    {
        id: 2,
        placeInfo: 'We had a great stay at this motel. The staff were friendly and helpful.'
    },
    {
        id: 3,
        placeInfo: 'The room was spacious and well-appointed. We enjoyed our stay.'
    },
    {
        id: 4,
        placeInfo: 'This motel exceeded our expectations. The amenities were fantastic.'
    },
    {
        id: 5,
        placeInfo: 'Our stay at this motel was wonderful. The bed was comfortable and the room was clean.'
    },
    {
        id: 6,
        placeInfo: 'We were impressed by the quality of service at this motel. Highly recommended.'
    }, 
]


const Feedback = (deviceType) => {
    return (
        <Container className='pb-4'>
            <h2
                className="text-center py-2"
                style={{ backgroundColor: "#5A9BF1" }}
            >
                CLIENTS FEEDBACK
            </h2> 

            <Carousel
                responsive={responsive}
                transitionDuration={500}
                autoPlay={deviceType !== "mobile" ? true : false}
                autoPlaySpeed={2000}
                deviceType={deviceType}
                infinite={true}
                ssr={true}
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            >
                {reviews.map((review) => (
                    <Col className='px-2'>
                        <Card className="cursorAll rounded-4" style={{ minHeight: '100px', backgroundColor: '#d1cfcf' }}>
                            <Card.Text className='py-3 px-2 d-flex justify-content-center align-items-center' style={{textAlign:'justify'}}>{review.placeInfo}</Card.Text>
                        </Card>
                    </Col>
                ))}
            </Carousel>
        </Container>
    )
}

export default Feedback;