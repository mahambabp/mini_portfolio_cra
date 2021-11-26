import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Jumbotron, Col, Container, Row } from "react-bootstrap";

function Hero(props) {
  return (
    <div className="p-0 mb-4 bg-transparent rounded-3">
      <Container>
        <Row className="justify-content-md-center py-5">
          <Col md="auto" sm={12}>
            {props.title && (
              <h1 className="display-1 fw-bold">{props.title}</h1>
            )}
            {props.subTitle && (
              <h3 className="display-4 fw-light">{props.subTitle}</h3>
            )}
            {props.text && <h3 className="lead fw-light">{props.text}</h3>}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
