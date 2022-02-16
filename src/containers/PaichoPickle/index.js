import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import banner__img from "../../assets/images/banner__img.png";
import ProductCard from "../../components/ProductCard";
import Slider from "react-slick";
import product__image from "../../assets/images/ProductImage.png";

const PaichoPickle = () => {
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
          {/* Paicho Pickle */}
          <p className="product__category">Paicho Pickle </p>
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

export default PaichoPickle;