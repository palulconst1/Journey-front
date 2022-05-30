import Link from 'next/link'
import landmarkStyles from '../styles/Landmark.module.css'

const LandmarkItem = ({ landmark }) => {
  return (
    <Link href={`/landmark/${landmark.id}`}>
      <a className={landmarkStyles.card}>
        <h3>{landmark.name}</h3>
      </a>
    </Link>
  )
}

export default LandmarkItem
