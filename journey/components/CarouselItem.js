import { Col, Image, Card, Row, Carousel } from 'react-bootstrap';

const CarouselItem = ({ photo }) => {
    return (
        <Carousel.Item>
            Item {photo}
        <Image
          className="d-block w-100"
          src="pozaTest.jpg"
          alt="First slide"
        />
      </Carousel.Item>
    );
};

export default CarouselItem;
