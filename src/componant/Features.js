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
                <Col xs={12} md={12} lg={4} className='pb-2'>
                    <Card className="bg-dark text-white py-4 px-2 text-center" style={{minHeight:'180px'}}>
                            <Card.Title >Accommodation</Card.Title>
                            <Card.Text style={{textAlign:'justify'}}>
                                The Nanango Star Motel offers a range of accommodation options to suit different guests' needs, from standard single rooms to larger family rooms.
                            </Card.Text>
                    </Card>
                </Col>
                <Col xs={12} md={12} lg={4} className='pb-2'>
                    <Card className="bg-dark text-white py-4 px-2 text-center" style={{ minHeight: '180px' }}>
                            <Card.Title >On-site Parking</Card.Title>
                        <Card.Text style={{ textAlign: 'justify' }}>
                                The motel provides ample on-site parking space, making it convenient for guests to park their vehicles.
                            </Card.Text>

                    </Card>
                </Col>
                <Col xs={12} md={12} lg={4}>
                    <Card className="bg-dark text-white  py-4 px-2 text-center" style={{ minHeight: '180px' }}>
                            <Card.Title >24-Hour Reception</Card.Title>
                        <Card.Text style={{ textAlign: 'justify' }}>
                                The motel has a 24-hour reception desk, allowing guests to check in or check out at any time of the day or night.
                            </Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Features