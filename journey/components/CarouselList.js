import CarouselItem from './CarouselItem'
import { Container, Row, Carousel } from 'react-bootstrap'

const CarouselList = ({ photos }) => {
  return (
    <Row>
      {photos.map((photo) => (
        <CarouselItem photo={photo} className="" />
      ))}
    </Row>
  )
}

export default CarouselList
