import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <>
      {/* hero-section */}
      <div className="hero-section">
        <Container>
          <Row>
            <Col lg={6}></Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default index;
