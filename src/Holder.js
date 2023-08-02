import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Hcards from "./cnts/Hcards";
import Data from "./Db/Data.js";
import "./index.css"
import View from "./cnts/View"
import Filters from "./cnts/Filters";

const Holder = () => {
    let lst = []
    lst = Data.map((ele) => {
        return <Hcards img={ele.img} title={ele.title} description={ele.description} isClicked={ele.isClicked} />
    })

    return (
    <Container>
      <Row>
                <Col xs={2} className="cnt-holder">
                    <View />
                    <Filters/>
                </Col>
                <Col xs={10} className="card-holder">
                    {lst}
        </Col>
      </Row>
        </Container>
    )
}

export default Holder