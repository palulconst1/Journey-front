import { server } from '../config'
import LandmarkProfile from '../components/LandmarkProfile'

export default function Landmarks({ landmark }) {
  return (
    <div>
        <LandmarkProfile landmark={landmark} />
    </div>
  )
}

export const getStaticProps = async () => {
    const res = await fetch(`${server}/landmark/status`)
    const landmark = await res.json()
  
    return {
      props: {
        landmark,
      },
    }
  }