import React from 'react'
import {
    Container,
    Row,
    Col,
    Card,
} from "react-bootstrap";
import Carousel from "react-multi-carousel";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
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
        placeInfo: 'This beautiful historical homestead has been preserved and restored over the years and is open for tours.'
    },
    {
        id: 2,
        placeInfo: 'Pioneer Park features a variety of heritage buildings and displays that showcase the towns history and culture.'
    },
    {
        id: 3,
        placeInfo: 'The park features several walking trails that offer stunning views of the surrounding countryside.'
    },
    {
        id: 4,
        placeInfo: 'Nanango is situated within the South Burnett Wine Region, which boasts several vineyards and wineries where you can taste some of the regions finest wines.'
    },
    {
        id: 5,
        placeInfo: 'Held on the first Saturday of every month, the Nanango Country Markets offer a range of local produce, crafts, and entertainment.'
    },
    {
        id: 6,
        placeInfo: 'The Nanango Showgrounds are home to several events throughout the year, including the Nanango Show, which features a range of competitions and displays.'
    },
]


    const Feedback = (deviceType) => {
  return (
      <Container className="my-5">
          <h1 className="text-center mb-3">Smart Offers</h1>
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
                  <Col lg={3} md={3} sm={12} style={{ height: "100%", width: "100%" }}>
                          <Card className="cursorAll rounded-4">
                              <Card.Text>{review.placeInfo}</Card.Text>
                          </Card>
                  </Col>
              ))}
          </Carousel>
      </Container>
  )
}

export default Feedback;