import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';

const Features = () => {
    return (
        <Container className="my-4">
            <h2
                className="text-center py-2"
                style={{ backgroundColor: "#3459e6", color: "white" }}
            >
                Features
            </h2>
            <Row>
                <Col xs={12} md={6} lg={4} className='pb-2'>
                    <Card className="bg-dark text-white">
                        <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title >Accommodation</Card.Title>
                            <Card.Text>
                                The Nanango Star Motel offers a range of accommodation options to suit different guests' needs, from standard single rooms to larger family rooms. All rooms come equipped with air conditioning, free Wi-Fi, and flat-screen TVs with cable channels.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className='pb-2'>
                    <Card className="bg-dark text-white">
                        <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title >On-site Parking</Card.Title>
                            <Card.Text>
                                The motel provides ample on-site parking space, making it convenient for guests to park their vehicles.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className="bg-dark text-white">
                        <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title >24-Hour Reception</Card.Title>
                            <Card.Text>
                                The motel has a 24-hour reception desk, allowing guests to check in or check out at any time of the day or night.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Features