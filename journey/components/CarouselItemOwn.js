import { Col, Image, Card, Row, Carousel } from "react-bootstrap";
import React from "react";
import { landmarkState, authState } from "../pages/_app";
import { useHookstate } from "@hookstate/core";
import axios from "axios";

const CarouselItemOwn = React.forwardRef((photo, ref) => {
    const auth = useHookstate(authState).get();
    const landmark = useHookstate(landmarkState).get();

    const handleDelete = async (photo) => {
        try {

          let poze = JSON.parse(JSON.stringify(landmark.picture))
          poze.pop(photo)

          const response = await axios.put(
              "http://localhost:5000/landmark",
              {
                  picture: poze
              },{ 
              headers: {
                  "Authorization": auth.jwt
                }}
          );
          landmarkState.set({
            picture: poze
          });

          window.location.href = "/";
      } catch (error) {
          console.error(error)
      }
  }

    return (
        <Col>
            <Image className="d-block w-100" src={photo.photo} alt="First" />
            <Col xl = "3">
            <div className="d-grid gap-2 my-4 ">
                <button className="btn btn-danger" type="submit" onClick={() => handleDelete(photo.photo)} >
                    delete
                </button>
            </div>
            </Col>
        </Col>
    );
});

export default CarouselItemOwn;
