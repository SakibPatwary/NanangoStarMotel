import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';


const services = [
    {
        id: 1,
        serviceName: "Restaurant & Bar",
        imageSrc: "./img/services/1.png",
    },
    {
        id: 2,
        serviceName: "Dry Cleaning",
        imageSrc: "./img/services/2.png",
    },
    {
        id: 3,
        serviceName: "Fitness Center",
        imageSrc: "./img/services/3.png",
    },
    {
        id: 4,
        serviceName: "Outdoor Pool",
        imageSrc: "./img/services/4.png",
    },
    {
        id: 5,
        serviceName: "Free Wifi",
        imageSrc: "./img/services/5.png",
    },
    {
        id: 6,
        serviceName: "In Room Safe",
        imageSrc: "./img/services/6.png",
    },
    {
        id: 7,
        serviceName: "Luggage Storage",
        imageSrc: "./img/services/7.png",
    }
    , {
        id: 8,
        serviceName: "On Site Dine",
        imageSrc: "./img/services/8.png",
    }
]

const Services = () => {
    return (
        <Container className="my-4">
            <h2
                className="text-center py-2"
                style={{ backgroundColor: "#3459e6", color: "white" }}
            >
                Services
            </h2>
            <Row>
                {services.map((service)=> (
                <Col xs={6} md={3} lg={3} className='pb-3'>
                    <Card className="bg-light text-black text-center">
                        <Card.Img
                            className='p-2'
                            style={{ maxHeight: '140px',borderRadius:'15px' }}
                       src={service.imageSrc}/>
                        <Card.Title as='h6'>{service.serviceName}</Card.Title>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Services