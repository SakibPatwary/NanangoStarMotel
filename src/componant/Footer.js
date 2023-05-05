import React from 'react'
import {
    Container, Col, Row, Card, CardGroup, Form, Button
} from "react-bootstrap";
import { FaPhoneAlt, FaLocationArrow } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#5A9BF1' }}>
            <Container>
                <Row className='d-flex text-center align-items-center py-4' style={{ color: 'black',fontWeight:'bold' }}>
                    <Col lg={4} md={4} sm={12} className='pb-4'>

                        <FaPhoneAlt size='40' /><br /><br />
                        (07) 4163 1666
                    </Col>
                    <Col lg={4} md={4} sm={12} className='pb-4'>
                        <FaLocationArrow size='40' /><br /><br />
                        43 Drayton Street, Nanango, QLD <br/>4615 Australia
                    </Col>
                    <Col lg={4} md={4} sm={12} className='pb-4'>
                        <GrMail size='40' /><br /><br />
                        nanangostar@gmail.com
                    </Col>
                </Row>

                <Row>
                    <Col className="d-flex justify-content-center mb-4" style={{ color: 'white' }}>
                        Copyright &copy; NANANGO STAR MOTEL
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Footer
