import CarouselItemOwn from './CarouselItemOwn'
import { Container, Row, Carousel } from 'react-bootstrap'

const CarouselListOwn = ({ photos }) => {
  return (
    <Row>
      {photos.map((photo) => (
        <CarouselItemOwn photo={photo} className="" />
      ))}
    </Row>
  )
}

export default CarouselListOwn
