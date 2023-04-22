import {React, useEffect, useState, useCallback} from "react";
import { Container, Row, Button, Col, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ImageViewer from "react-simple-image-viewer";

const images = [
    {
        id: 1,
        imageSrc: "./img/gallery/1.jpg",
    },
    {
        id: 2,
        imageSrc: "./img/gallery/2.jpg",
    },
    {
        id: 3,
        imageSrc: "./img/gallery/3.jpg",
    },
    {
        id: 4,
        imageSrc: "./img/gallery/4.jpg",
    },
    {
        id: 5,
        imageSrc: "./img/gallery/5.jpg",
    },
    {
        id: 6,
        imageSrc: "./img/gallery/6.jpg",
    },
    {
        id: 7,
        imageSrc: "./img/gallery/7.jpg",
    },
    {
        id: 8,
        imageSrc: "./img/gallery/8.jpg",
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
        <Container className="my-4">
            <h2
                className="text-center py-2"
                style={{ backgroundColor: "#3459e6", color: "white" }}
            >
                Image Gallery
            </h2>
            <Row>
                {images.map((img, index) => (
                    <Col lg={3} md={3} sm={6} xs={6}  className="p-2">
                        <Card className="rounded-4 cursorAll">
                            <Card.Img
                                className="img-fluid"
                                style={{ borderRadius: "10px" }}
                                src={img.imageSrc}
                                onClick={() => openImageViewer(index)}
                                key={index}
                            />
                        </Card>
                    </Col>
                ))}

                {isViewerOpen && (
                    <ImageViewer
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
            <Row className="py-2 px-2">
                <LinkContainer to="/gallery">
                    <Button variant="secondary" size="sm" className="rounded">
                        <b>View All Images</b>
                    </Button>
                </LinkContainer>
            </Row>
        </Container>
    );
};

export default Gallery;
