import React from 'react'
import {
    Container, Col, Row, Card, CardGroup, Form, Button
} from "react-bootstrap";
import { FaPhoneAlt, FaLocationArrow } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const Footer = () => {
    return (
        <>
            <Container>

                <CardGroup className='text-center pb-1'>
                    <Card style={{ color: "white" }} className='border-0'>
                        <Card.Body>
                            <Card
                                className="mt-2"
                                style={{ border: "none", backgroundColor: "#0066ff" }}
                            >
                                <Card.Body>
                                    <Card.Title>Address</Card.Title>
                                    <Card.Text>33 Henry Street Nanango <br /> QLD 4615 Australia</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card
                                className="mt-4"
                                style={{ border: "none", backgroundColor: "#4c00e6" }}
                            >
                                <Card.Body>
                                    <Card.Title>Phone</Card.Title>
                                    <Card.Text>07 4163 1444</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card
                                className="mt-4"
                                style={{ border: "none", backgroundColor: "#009999" }}
                            >
                                <Card.Body>
                                    <Card.Title>Email</Card.Title>
                                    <Card.Text>info@nanangomotel.com.au</Card.Text>
                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>

                    <Card className='border-0'>
                        <Card.Body>
                            Contact Form Here
                        </Card.Body>
                    </Card>


                </CardGroup>



            </Container>

            <Container fluid style={{ backgroundColor: '#3459e6', color: 'white' }} className='py-3'>
                <Col className="d-flex justify-content-center">
                    Copyright &copy; NANANGO STAR MOTEL
                </Col></Container>

        </>
    )
}

export default Footer
