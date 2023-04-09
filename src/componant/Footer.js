import React from 'react'
import {
    Container,Col, Row,
} from "react-bootstrap";
import { FaPhoneAlt, FaLocationArrow } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#3459e6' }}>
        <Container>
                <Row className='d-flex text-center align-items-center py-5' style={{ color: 'white' }}>
                    <Col lg={4} md={4} sm={12} className='pb-5'>

                        <FaPhoneAlt size='40' /><br /><br />
                        07 4163 1444
                    </Col>
                    <Col lg={4} md={4} sm={12} className='pb-5'>
                        <FaLocationArrow size='40' /><br /><br />
                        33 Henry Street

                        Nanango QLD 4615

                        Australia
                    </Col>
                    <Col lg={4} md={4} sm={12} className='pb-5'>
                        <GrMail size='40' /><br /><br />
                        info@nanangomotel.com.au
                    </Col>


                </Row>
                <Row>
                    <Col className="d-flex justify-content-center mb-4" style={{ color: '#adb5bd' }}>
                        Copyright &copy; NANANGO STAR MOTEL
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Footer
