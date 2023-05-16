import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Features = () => {
    return (
        <Container className="my-4">
            <h2
                className="text-center py-2"
                style={{ backgroundColor: "#5A9BF1", color: 'white', fontWeight: 'bold' }}
            >
                FEATURES
            </h2>
            <Row>
                <Col xs={12} sm={12} md={6} lg={4} className='pb-3'>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                    >
                    <Card className="py-4 px-2 text-center" style={{ minHeight: '180px', backgroundColor:'#d1cfcf'}}>
                            <Card.Title style={{ fontWeight: 'bold' }}>Accommodation</Card.Title>
                            <Card.Text style={{textAlign:'justify'}}>
                                The Nanango Star Motel offers a range of accommodation options to suit different guest needs, from standard single rooms to family/twin share rooms.
                            </Card.Text>
                        </Card></motion.div>
                </Col>
                <Col xs={12} sm={12}  md={6} lg={4} className='pb-3'>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                    >
                    <Card className="py-4 px-2 text-center" style={{ minHeight: '180px', backgroundColor: '#d1cfcf' }}>
                            <Card.Title style={{ fontWeight: 'bold' }}>On-site Parking</Card.Title>
                        <Card.Text style={{ textAlign: 'justify' }}>
                                The motel provides ample on-site parking space, making it convenient for guests to park their vehicles.
                            </Card.Text>

                        </Card></motion.div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} className='pb-3'>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                    >
                    <Card className="py-4 px-2 text-center" style={{ minHeight: '180px', backgroundColor: '#d1cfcf' }}>
                            <Card.Title style={{ fontWeight: 'bold' }}>24 Hours Manager on-site</Card.Title>
                        <Card.Text style={{ textAlign: 'justify' }}>
                                The motel has manager on-site 24/7 to assist guest with chech-in and all other services. Reception desk is open from 8AM till 8PM and after hours assistance by calling the motel number.
                            </Card.Text>
                        </Card></motion.div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} className='pb-3'>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                    >
                    <Card className="py-4 px-2 text-center" style={{ minHeight: '180px', backgroundColor: '#d1cfcf' }}>
                            <Card.Title style={{ fontWeight: 'bold' }}>Free Wi-Fi</Card.Title>
                        <Card.Text style={{ textAlign: 'justify' }}>
                            Offering free Wi-Fi is essential for most travelers, especially corporate guests or those on vacation.
                        </Card.Text>
                        </Card></motion.div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} className='pb-3'>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                    >
                    <Card className="py-4 px-2 text-center" style={{ minHeight: '180px', backgroundColor: '#d1cfcf' }}>
                            <Card.Title style={{ fontWeight: 'bold' }}>Housekeeping Service</Card.Title>
                        <Card.Text style={{ textAlign: 'justify' }}>
                            Regular cleaning and maintenance of guest rooms, including bed linens and towels.
                        </Card.Text>
                        </Card></motion.div>
                </Col>
                <Col xs={12} sm={12}  md={6} lg={4} className='pb-3'>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                    >
                    <Card className="py-4 px-2 text-center" style={{ minHeight: '180px', backgroundColor: '#d1cfcf' }}>
                            <Card.Title style={{ fontWeight: 'bold' }}>Tea Coffee and Kitchenette</Card.Title>
                        <Card.Text style={{ textAlign: 'justify' }}>
                            Complementary tea, coffee, sugar biscuits provided with each room. Microwave, fridge, kettle and toaster along with glasses, plates and cutleries are some of the inclusions with each room.
                        </Card.Text>
                        </Card></motion.div>
                </Col>
            </Row>
        </Container>
    )
}

export default Features