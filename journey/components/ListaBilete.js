import { Col, Image, Card, Row } from "react-bootstrap";
import Bilet from "./Bilet";

const ListaBilete = ({ bilete }) => {
    return (
        <Row>
      {bilete.map((bilet) => (
        <Bilet bilet={bilet} className="" />
      ))}
    </Row>
    );
};

export default ListaBilete;