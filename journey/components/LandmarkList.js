import LandmarkItem from './LandmarkItem'
import landmarkStyles from '../styles/Landmark.module.css'
import { Container, Row } from 'react-bootstrap'

const LandmarkList = ({ landmarks }) => {
  console.log("::::::::",landmarks)
  return (
    <Container>
      <Row className='my-4'>
      {landmarks.map((landmark) => (
        <LandmarkItem landmark={landmark} className="" />
      ))}
      </Row>
    </Container>
  )
}

export default LandmarkList
