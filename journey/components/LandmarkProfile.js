import Link from "next/link";
import landmarkStyles from "../styles/Landmark.module.css";
import TicketList from "./TicketList";

const LandmarkProfile = ({ landmark }) => {
    return (
        <Link href={`/landmark/${landmark.id}`}>
            <div className={landmarkStyles.card}>
                <img className="card-img-top" src="./pozaTest.jpg"/>
                <div className="card-body">
                    <h5 className="card-title">{landmark.name}</h5>
                </div>
            </div>
        </Link>
    );
};

export default LandmarkProfile;
