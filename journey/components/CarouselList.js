import CarouselItem from './CarouselItem'
import { Container, Row, Carousel } from 'react-bootstrap'

const CarouselList = ({ photos }) => {
  return (
    <Carousel>
        carusel
      {photos.map((photo) => (
        <CarouselItem photo={photo} className="" />
      ))}
    </Carousel>
  )
}

export default CarouselList
