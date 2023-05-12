import { React, useEffect } from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';
import { motion } from "framer-motion";

const places = [
    {
        id: 1,
        imageSrc: './img/places/1.png',
        placeName: 'Visit Ringsfield House',
        placeInfo: 'This beautiful historical homestead has been preserved and restored over the years and is open for tours.'
    },
    {
        id: 2,
        imageSrc: '/img/places/2.png',
        placeName: 'Explore Pioneer Park',
        placeInfo: 'Pioneer Park features a variety of heritage buildings and displays that showcase the towns history and culture.'
    },
    {
        id: 3,
        imageSrc: '/img/places/3.png',
        placeName: 'Take a hike in Mount Wooroolin National Park',
        placeInfo: 'The park features several walking trails that offer stunning views of the surrounding countryside.'
    },
    {
        id: 4,
        imageSrc: '/img/places/4.png',
        placeName: 'Visit the South Burnett Wine Region',
        placeInfo: 'Nanango is situated within the South Burnett Wine Region, which boasts several vineyards and wineries where you can taste some of the regions finest wines.'
    },
    {
        id: 5,
        imageSrc: '/img/places/5.png',
        placeName: 'Attend the Nanango Country Markets',
        placeInfo: 'Held on the first Saturday of every month, the Nanango Country Markets offer a range of local produce, crafts, and entertainment.'
    },
    {
        id: 6,
        imageSrc: '/img/places/6.png',
        placeName: 'Visit the Nanango Showgrounds',
        placeInfo: 'The Nanango Showgrounds are home to several events throughout the year, including the Nanango Show, which features a range of competitions and displays.'
    },
    {
        id: 7,
        imageSrc: '/img/places/7.png',
        placeName: 'Take a day trip to the Bunya Mountains National Park',
        placeInfo: 'The park is located just a short drive from Nanango and features stunning natural scenery, walking trails, and picnic areas.'
    },
    {
        id: 8,
        imageSrc: '/img/places/8.png',
        placeName: 'Enjoy a round of golf at the Nanango Golf Club',
        placeInfo: 'The club boasts a challenging 18-hole course thats open to visitors.'
    },
    {
        id: 9,
        imageSrc: '/img/places/9.png',
        placeName: 'Coomba Falls',
        placeInfo: 'Coomba Falls is a beautiful swimming hole located about 15 km from Nanango. Its a great place to cool off on a hot day.'
    },
    {
        id: 10,
        imageSrc: '/img/places/10.png',
        placeName: 'Kingaroy',
        placeInfo: 'Kingaroy is a town located about 20 km from Nanango. Its known for its peanuts and there are many peanut-related attractions in the town, including the Peanut Van and the Peanut Heritage Trail.'
    },
    {
        id: 11,
        imageSrc: '/img/places/11.png',
        placeName: 'Wondai',
        placeInfo: ' Wondai is a town located about 15 km from Nanango. Its known for its markets and there are regular markets held in the town selling a range of local produce and handmade goods.'
    },
    {
        id: 12,
        imageSrc: '/img/places/12.png',
        placeName: 'South Burnett Wine Trail',
        placeInfo: 'The South Burnett Wine Trail is a popular tourist attraction that takes visitors on a tour of the regions wineries. There are several wineries located within easy driving distance of Nanango.'
    },
]

const Places = () => {
    return (
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []),
        (
            <Container className="my-4 mt-5 pt-5">
                <h1
                    className="text-center py-2 pt-3"
                >
                    Popular Places in Nanango
                </h1>
                <Row>
                    {places.map((place) => (

                        <Col xs={12} md={4} lg={3} className='pb-3'>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                            >
                                <Card className="text-black text-center" style={{ minHeight: '430px', backgroundColor: '#d1cfcf' }}>
                                    <Card.Img
                                        className='p-2'
                                        style={{ borderRadius: '15px' }}
                                        src={place.imageSrc} />
                                    <Card.Title className='py-2 px-2'>{place.placeName}</Card.Title>
                                    <Card.Text className='px-2' style={{ textAlign: 'justify' }}>{place.placeInfo}</Card.Text>
                                </Card></motion.div>
                        </Col>

                    ))}
                </Row>
            </Container>
        )
    )
}

export default Places