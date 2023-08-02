import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ContentPage from "../ContentPage";

const Hcards = (props) => {
  
    return (
      <Card style={{ width: "18rem" }} className="disp-card">
        <Card.Img
          variant="top"
          src={props.img}
        />
        <Card.Body>
                <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Link to="/content"><Button variant="primary">View Details</Button></Link>
          
        </Card.Body>
      </Card>
    );
}

export default Hcards