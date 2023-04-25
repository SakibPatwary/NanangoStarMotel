import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';

const Features = () => {
    return (
        <Container className="my-4">
            <h2
                className="text-center py-2"
                style={{ backgroundColor: "#5A9BF1"}}
            >
                FEATURES
            </h2>
            <Row>
                <Col xs={12} md={12} lg={4} className='pb-3'>
                    <Card className="py-4 px-2 text-center" style={{ minHeight: '180px', backgroundColor:'#d1cfcf'}}>
                            <Card.Title >Accommodation</Card.Title>
                            <Card.Text style={{textAlign:'justify'}}>
                                The Nanango Star Motel offers a range of accommodation options to suit different guests' needs, from standard single rooms to larger family rooms.
                            </Card.Text>
                    </Card>
                </Col>
                <Col xs={12} md={12} lg={4} className='pb-3'>
                    <Card className="py-4 px-2 text-center" style={{ minHeight: '180px', backgroundColor: '#d1cfcf' }}>
                            <Card.Title >On-site Parking</Card.Title>
                        <Card.Text style={{ textAlign: 'justify' }}>
                                The motel provides ample on-site parking space, making it convenient for guests to park their vehicles.
                            </Card.Text>

                    </Card>
                </Col>
                <Col xs={12} md={12} lg={4} className='pb-3'>
                    <Card className="py-4 px-2 text-center" style={{ minHeight: '180px', backgroundColor: '#d1cfcf' }}>
                            <Card.Title >24-Hour Reception</Card.Title>
                        <Card.Text style={{ textAlign: 'justify' }}>
                                The motel has a 24-hour reception desk, allowing guests to check in or check out at any time of the day or night.
                            </Card.Text>
                    </Card>
                </Col>
                <Col xs={12} md={12} lg={4} className='pb-3'>
                    <Card className="py-4 px-2 text-center" style={{ minHeight: '180px', backgroundColor: '#d1cfcf' }}>
                        <Card.Title >Free Wi-Fi</Card.Title>
                        <Card.Text style={{ textAlign: 'justify' }}>
                            Offering free Wi-Fi is essential for most travelers, especially business people or those on vacation.
                        </Card.Text>
                    </Card>
                </Col>
                <Col xs={12} md={12} lg={4} className='pb-3'>
                    <Card className="py-4 px-2 text-center" style={{ minHeight: '180px', backgroundColor: '#d1cfcf' }}>
                        <Card.Title >Housekeeping Service</Card.Title>
                        <Card.Text style={{ textAlign: 'justify' }}>
                            Regular cleaning and maintenance of guest rooms, including bed linens and towels.
                        </Card.Text>
                    </Card>
                </Col>
                <Col xs={12} md={12} lg={4} className='pb-3'>
                    <Card className="py-4 px-2 text-center" style={{ minHeight: '180px', backgroundColor: '#d1cfcf' }}>
                        <Card.Title >Laundry facilities</Card.Title>
                        <Card.Text style={{ textAlign: 'justify' }}>
                            Guests appreciate having access to laundry facilities, especially if they are staying for an extended period.
                        </Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Features