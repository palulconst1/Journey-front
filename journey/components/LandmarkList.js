import LandmarkItem from './LandmarkItem'
import landmarkStyles from '../styles/Landmark.module.css'

const LandmarkList = ({ landmarks }) => {
  return (
    <div className={landmarkStyles.grid}>
      {landmarks.map((landmark) => (
        <LandmarkItem landmark={landmark} />
      ))}
    </div>
  )
}

export default LandmarkList
