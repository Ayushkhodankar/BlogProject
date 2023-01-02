import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" >
          <h3>Developed by Ayush Khodankar</h3>
        </Col>
        <Col md="4">
          <h3>Copyright © {year} Ayush</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
