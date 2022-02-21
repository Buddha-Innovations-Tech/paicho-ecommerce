import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

import product__image from "../../assets/images/ProductImage.png";
import hero__img from "../../assets/images/hero__img.png";

import ProductCard from "../../components/ProductCard";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Home = () => {
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
                  <Link to="/paichopickle" className="btn__buy">
                    Buy Now
                  </Link>
                </div>
              </Col>

              <Col lg={6}>
                <div className="hero__banner">
                  <img src={hero__img} className="hero__banner--img" alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Categories */}
        <section className="product">
          <Container>
            {/* Paicho Pickle */}
            <div className="d-sm-flex justify-content-between">
              <p className="product__category">Paicho Pickle </p>
              <Link to="/paichopickle">
                <span className="see__more">See More</span>
              </Link>
            </div>
            <Row className="product__row">
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                  path="/productdetail"
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                  path="/productdetail"
                />
              </Col>
              <Col md={3} className="red">
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="out of stock"
                  imageSource={product__image}
                  path="/outofstock"
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                  path="/productdetail"
                />
              </Col>
            </Row>

            {/* Paicho Processing Products  */}
            <div className="d-sm-flex justify-content-between">
              <p className="product__category">Paicho Processing Products </p>
              <Link to="/processingproduct">
                <span className="see__more">See More</span>
              </Link>
            </div>
            <Row className="product__row">
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                  path="/productdetail"
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                  path="/productdetail"
                />
              </Col>
              <Col md={3} className="red">
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="out of stock"
                  imageSource={product__image}
                  path="/outofstock"
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                  path="/productdetail"
                />
              </Col>
            </Row>

            {/* Grains & Pulses  */}
            <div className="d-sm-flex justify-content-between">
              <p className="product__category">Grains & Pulses </p>
              <Link to="/grainsandpulses">
                <span className="see__more">See More</span>
              </Link>
            </div>
            <Row className="product__row">
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                  path="/productdetail"
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                  path="/productdetail"
                />
              </Col>
              <Col md={3} className="red">
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="out of stock"
                  imageSource={product__image}
                  path="/outofstock"
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                  path="/productdetail"
                />
              </Col>
            </Row>

            {/* Indeginous Product */}
            <div className="d-sm-flex justify-content-between">
              <p className="product__category">Indeginous Product </p>
              <Link to="/indenginousproducts">
                <span className="see__more">See More</span>
              </Link>
            </div>
            <Row className="product__row">
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                  path="/productdetail"
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                  path="/productdetail"
                />
              </Col>
              <Col md={3} className="red">
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="out of stock"
                  imageSource={product__image}
                  path="/outofstock"
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                  path="/productdetail"
                />
              </Col>
            </Row>

            {/* Dry  Foods */}
            <div className="d-sm-flex justify-content-between">
              <p className="product__category">Dry Foods </p>
              <Link to="/paichodryfoods">
                <span className="see__more">See More</span>
              </Link>
            </div>
            <Row className="product__row">
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                  path="/productdetail"
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                  path="/productdetail"
                />
              </Col>
              <Col md={3} className="red">
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="out of stock"
                  imageSource={product__image}
                  path="/outofstock"
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                  path="/productdetail"
                />
              </Col>
            </Row>

            {/* Ketchup & Sauces */}
            <div className="d-sm-flex justify-content-between">
              <p className="product__category">Ketchup & Sauces </p>
              <Link to="/ketchupandsauces">
                <span className="see__more">See More</span>
              </Link>
            </div>
            <Row className="product__row">
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                  path="/productdetail"
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                  path="/productdetail"
                />
              </Col>
              <Col md={3} className="red">
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="out of stock"
                  imageSource={product__image}
                  path="/outofstock"
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                  path="/productdetail"
                />
              </Col>
            </Row>

            {/* Organic Vegetables  */}
            <div className="d-sm-flex justify-content-between">
              <p className="product__category">Organic Vegetables </p>
              <Link to="/organicvegetables">
                <span className="see__more">See More</span>
              </Link>
            </div>
            <Row className="product__row">
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                  path="/productdetail"
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                  path="/productdetail"
                />
              </Col>
              <Col md={3} className="red">
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="out of stock"
                  imageSource={product__image}
                  path="/outofstock"
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                  path="/productdetail"
                />
              </Col>
            </Row>
          </Container>
        </section>

        <Footer />
      </section>
    </>
  );
};

export default Home;
