import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import hero__img from "../../assets/images/hero__img.png";
import { Button, Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <NavBar />
      {/* hero-section */}
      <section className="hero">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="hero__content">
                <h2 className="hero__content--heading mb-13">
                  Get 10% off with Paicho Lemon Pickle{" "}
                </h2>
                <p className="hero__content--para mb-32">
                  Organic Food, Good Health , Good Mood{" "}
                </p>{" "}
                <br />
                <Button>Buy Now</Button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="hero__banner">
                <img src={hero__img} className="hero__banner--img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Home;
