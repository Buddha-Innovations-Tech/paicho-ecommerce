import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

import ProductCard from "../../components/ProductCard";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

import pineapple__juice from "../../assets/images/pineapple-juice.png";
import mixed__juice from "../../assets/images/mixed-fruit-juice.png";
import product__image from "../../assets/images/ProductImage.png";
import guava__juice from "../../assets/images/guava-juice.png";
import banner__img from "../../assets/images/banner__img.png";
import sweet__corn from "../../assets/images//sweet-corn.png";

const ProcessingProduct = () => {
  var settings = {
    dots: false,
    infinite: true,
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
      <NavBar />

      {/* banner */}
      <section className="pickle">
        <Container>
          <Row>
            <Col lg={6}>
              <Banner
                title="Quality Is Our Identity"
                para="Organic Food, Good Health , Good Mood "
              />
            </Col>
            <Col lg={6}>
              <div className="hero__banner">
                <img src={banner__img} className="hero__banner--img" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* products */}
      <section className="product">
        <Container>
          <p className="product__category new__items">New Items </p>
          <Row className="product__row">
            <Slider {...settings}>
              <Col md={3}>
                <ProductCard
                  name="Whole Sweet Corn "
                  price="120"
                  stock="out of stock"
                  imageSource={sweet__corn}
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Guava Juice"
                  price="120"
                  stock="in stock"
                  imageSource={guava__juice}
                />
              </Col>
              <Col md={3} className="red">
                <ProductCard
                  name="Mixed Fruit Juice "
                  price="120"
                  stock="out of stock"
                  imageSource={mixed__juice}
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Pineapple Juice"
                  price="120"
                  stock="in stock"
                  imageSource={pineapple__juice}
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                />
              </Col>
            </Slider>
          </Row>

          <Row className="product__row">
            <Slider {...settings}>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="out of stock"
                  imageSource={product__image}
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                />
              </Col>
              <Col md={3} className="red">
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="out of stock"
                  imageSource={product__image}
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                />
              </Col>
            </Slider>
          </Row>

          <Row className="product__row">
            <Slider {...settings}>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="out of stock"
                  imageSource={product__image}
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                />
              </Col>
              <Col md={3} className="red">
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="out of stock"
                  imageSource={product__image}
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                />
              </Col>
            </Slider>
          </Row>

          <Row className="product__row">
            <Slider {...settings}>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="out of stock"
                  imageSource={product__image}
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                />
              </Col>
              <Col md={3} className="red">
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="out of stock"
                  imageSource={product__image}
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                />
              </Col>
            </Slider>
          </Row>

          <Row className="product__row">
            <Slider {...settings}>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="out of stock"
                  imageSource={product__image}
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                />
              </Col>
              <Col md={3} className="red">
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="out of stock"
                  imageSource={product__image}
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                />
              </Col>
              <Col md={3}>
                <ProductCard
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                  imageSource={product__image}
                />
              </Col>
            </Slider>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default ProcessingProduct;
