import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

function Home(props) {
  return (
    <Container fluid>
        <Row>
          <Col size="offset-2 md-4">
            <Link to="/login">Log In</Link>
          </Col>
          <Col size="offset-2 md-4">
            <Link to="/signup">Sign up</Link>
          </Col>
        </Row>
      </Container>
  )
}

export default Home;
