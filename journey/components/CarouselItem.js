import { Col, Image, Card, Row, Carousel } from 'react-bootstrap';
import React from "react";


const CarouselItem = React.forwardRef((photo, ref) => {
    console.log("photo", photo.photo)
    return (
        <Col>
        <Image
          className="d-block w-100"
          src={`../${photo.photo}`}
          alt="slide"
        />
      </Col>
    );
});

export default CarouselItem;
