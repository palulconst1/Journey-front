import { server } from '../config'
import LandmarkProfile from '../components/LandmarkProfile'
import { useHookstate } from "@hookstate/core";
import { landmarkState } from "./_app";

export default function LandmarksProfile() {

  return (
    <div>
        <LandmarkProfile  />
    </div>
  )
}
