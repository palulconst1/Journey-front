import { Col, Image, Card, Row, Carousel } from 'react-bootstrap';
import React from "react";


const CarouselItem = React.forwardRef((props, ref) => {

    return (
        <Col>
        <Image
          className="d-block w-100"
          src="/testTest.jpg"
          alt="First slide"
        />
      </Col>
    );
});

export default CarouselItem;
