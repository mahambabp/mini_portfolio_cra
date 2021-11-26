import React from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sd={12}>
            Bafana Mahamba
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            This site was made by Bafana
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
