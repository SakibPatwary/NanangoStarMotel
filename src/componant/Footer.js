import React from 'react'
import {
    Container, Col, Row, Card, CardGroup, Form, Button
} from "react-bootstrap";
import { FaPhoneAlt, FaLocationArrow } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const Footer = () => {
    return (
        // <>
        //     <Container>

        //         <CardGroup className='text-center pb-1'>
        //             <Card style={{ color: "white" }} className='border-0'>
        //                 <Card.Body>
        //                     <Card
        //                         className="mt-2"
        //                         style={{ border: "none", backgroundColor: "#0066ff" }}
        //                     >
        //                         <Card.Body>
        //                             <Card.Title>Address</Card.Title>
        //                             <Card.Text>33 Henry Street Nanango <br /> QLD 4615 Australia</Card.Text>
        //                         </Card.Body>
        //                     </Card>

        //                     <Card
        //                         className="mt-4"
        //                         style={{ border: "none", backgroundColor: "#4c00e6" }}
        //                     >
        //                         <Card.Body>
        //                             <Card.Title>Phone</Card.Title>
        //                             <Card.Text>07 4163 1444</Card.Text>
        //                         </Card.Body>
        //                     </Card>

        //                     <Card
        //                         className="mt-4"
        //                         style={{ border: "none", backgroundColor: "#009999" }}
        //                     >
        //                         <Card.Body>
        //                             <Card.Title>Email</Card.Title>
        //                             <Card.Text>info@nanangomotel.com.au</Card.Text>
        //                         </Card.Body>
        //                     </Card>
        //                 </Card.Body>
        //             </Card>

        //             <Card className='border-0'>
        //                 <Card.Body>
        //                     Contact Form Here
        //                 </Card.Body>
        //             </Card>


        //         </CardGroup>



        //     </Container>

        //     <Container fluid style={{ backgroundColor: '#3459e6', color: 'white' }} className='py-3'>
        //         <Col className="d-flex justify-content-center">
        //             Copyright &copy; NANANGO STAR MOTEL
        //         </Col></Container>

        // </>

        <div style={{ backgroundColor: '#5A9BF1' }}>
            <Container>
                <Row className='d-flex text-center align-items-center py-5' style={{ color: 'black',fontWeight:'bold' }}>
                    <Col lg={4} md={4} sm={12} className='pb-5'>

                        <FaPhoneAlt size='40' /><br /><br />
                        07 4163 1444
                    </Col>
                    <Col lg={4} md={4} sm={12} className='pb-5'>
                        <FaLocationArrow size='40' /><br /><br />
                        33 Henry Street Nanango QLD <br/>4615 Australia
                    </Col>
                    <Col lg={4} md={4} sm={12} className='pb-5'>
                        <GrMail size='40' /><br /><br />
                        info@nanangomotel.com.au
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
