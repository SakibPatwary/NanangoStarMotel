import {React, useEffect, useState, useCallback} from "react";
import { Container, Row, Button, Col, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ImageViewer from "react-simple-image-viewer";
import { motion } from "framer-motion";

const images = [
    {
        id: 1,
        imageSrc: "./img/gallery/6.png",
    },
    {
        id: 2,
        imageSrc: "./img/gallery/7.png",
    },
    {
        id: 3,
        imageSrc: "./img/gallery/5.png",
    },
    {
        id: 4,
        imageSrc: "./img/gallery/8.png",
    },
    {
        id: 5,
        imageSrc: "./img/gallery/2.png",
    },
    {
        id: 6,
        imageSrc: "./img/gallery/3.png",
    },
    {
        id: 7,
        imageSrc: "./img/gallery/1.png",
    },
    {
        id: 8,
        imageSrc: "./img/gallery/4.png",
    },
];

const Gallery = ({device}) => {

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };


    return (
        <Container className="my-4 pb-2">
            <h2
                className="text-center py-2"
                style={{ backgroundColor: "#5A9BF1", color: 'white', fontWeight: 'bold' }}
            >
                IMAGE GALLERY
            </h2>
            <Row>
                {images.map((img, index) => (
                    <Col lg={3} md={4} sm={6} xs={6}  className="pb-2">
                        <motion.div
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.9 }}
                        >
                        <Card className="rounded-4 cursorAll">
                            <Card.Img
                                className="img-fluid"
                                style={{ borderRadius: "10px", objectFit:'cover'}}
                                src={img.imageSrc}
                                onClick={() => openImageViewer(index)}
                                key={index}
                            />
                        </Card>
                        </motion.div>
                    </Col>
                ))}

                {isViewerOpen && (
                    <ImageViewer
                    className='py-5'
                        src={images.map(img => img.imageSrc)}
                        currentIndex={currentImage}
                        disableScroll={true}
                        closeOnClickOutside={true}
                        onClose={closeImageViewer}
                        backgroundStyle={{
                            backgroundColor: "rgba(0,0,0,0.7)",
                        }}
                    />
                )}

            </Row>
            {/* <Container>
            <Row>
                <LinkContainer to="/gallery">
                    <Button variant="dark" size="sm" className="rounded">
                        <b>View All Images</b>
                    </Button>
                </LinkContainer>
            </Row>
            </Container> */}
        </Container>
    );
};

export default Gallery;
