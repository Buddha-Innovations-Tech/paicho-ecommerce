import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import hero__img from "../../assets/images/hero__img.png";
import { Button, Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import Slider from "react-slick";

const Home = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="home">
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
                  <Button className="btn__buy">Buy Now</Button>
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

        {/* Categories */}
        <section className="product">
          <Container>
            <Row>
              <Slider {...settings}>
                <Col md={3}>
                  <ProductCard
                    name="Chilly Pickle"
                    price="120"
                    stock="in stock"
                  />
                </Col>
                <Col md={3}>
                  <ProductCard
                    name="Chilly Pickle"
                    price="120"
                    stock="in stock"
                  />
                </Col>
                <Col md={3}>
                  <ProductCard
                    name="Chilly Pickle"
                    price="120"
                    stock="in stock"
                  />
                </Col>
                <Col md={3}>
                  <ProductCard
                    name="Chilly Pickle"
                    price="120"
                    stock="in stock"
                  />
                </Col>
                <Col md={3}>
                  <ProductCard
                    name="Chilly Pickle"
                    price="120"
                    stock="in stock"
                  />
                </Col>
              </Slider>
            </Row>
          </Container>
        </section>

        <Footer />
      </section>
    </>
  );
};

export default Home;
