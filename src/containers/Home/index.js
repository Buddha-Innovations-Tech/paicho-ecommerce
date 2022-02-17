import React,{useState} from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import hero__img from "../../assets/images/hero__img.png";
import { Button, Col, Container, Row,Modal } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import Slider from "react-slick";
import product__image from "../../assets/images/ProductImage.png";
import InputForm from "../../components/InputForm";
import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/images/googleicon.png";
import Facebookicon from "../../assets/images/facebookicon.png";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                  <Button className="btn__buy" onClick={handleShow}>Buy Now</Button>
                  <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>
                            <p>Sign In to your Paicho Account</p>
                            <span>Please fill in the form correctly to sign in your paicho account</span>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                         <div className="mt-4 position-relative">
                           <InputForm label="Mobile Number" type="num" placeholder="Enter Your Mobile Number" name="mobilenumber" asteric="*"/>
                           
                         </div>
                         <div className="mt-4 position-relative">
                           <InputForm label="Password" type="num" placeholder="Enter Your Password" name="password" asteric="*"/>
                           
                         </div>

                         <button className=" sign-in-btn">Sign In</button>

                         <Link to="" className="forget-password"><u>Forget Password?</u></Link>

                         <p className="or">or</p>

                         <div className="signin-socialmediaicon">
                              <img src={Facebookicon} alt="" />
                              <img src={GoogleIcon} alt="" />
                         </div>
                        
                        <p className="dont-haveacc">Don't have an account?<Link to=""> Sign Up </Link></p>
                        </Modal.Body>
                      
                      </Modal>
                </div>
              </Col>
              <Col lg={6}>
                <div className="hero__banner">
                  <img
                    src={hero__img}
                    className="hero__banner--img"
                    alt="hero banner"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Categories */}
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
                <Col md={3}>
                  <ProductCard
                    name="Chilly Pickle"
                    price="120"
                    stock="in stock"
                    imageSource={product__image}
                    path="/productdetail"
                  />
                </Col>
              </Slider>
            </Row>

            {/* Paicho Processing Products  */}
            <p className="product__category">Paicho Processing Products </p>
            <Row className="product__row">
              <Slider {...settings}>
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
                <Col md={3}>
                  <ProductCard
                    name="Chilly Pickle"
                    price="120"
                    stock="in stock"
                    imageSource={product__image}
                    path="/productdetail"
                  />
                </Col>
              </Slider>
            </Row>

            {/* Grains & Pulses  */}
            <p className="product__category">Grains & Pulses </p>
            <Row className="product__row">
              <Slider {...settings}>
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
                <Col md={3}>
                  <ProductCard
                    name="Chilly Pickle"
                    price="120"
                    stock="in stock"
                    imageSource={product__image}
                    path="/productdetail"
                  />
                </Col>
              </Slider>
            </Row>

            {/* Indeginous Product */}
            <p className="product__category">Indeginous Product </p>
            <Row className="product__row">
              <Slider {...settings}>
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

            {/* Dry  Foods */}
            <p className="product__category">Dry Foods </p>
            <Row className="product__row">
              <Slider {...settings}>
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
                <Col md={3}>
                  <ProductCard
                    name="Chilly Pickle"
                    price="120"
                    stock="in stock"
                    imageSource={product__image}
                    path="/productdetail"
                  />
                </Col>
              </Slider>
            </Row>

            {/* Paicho Jam  */}
            <p className="product__category">Paicho Jam </p>
            <Row className="product__row">
              <Slider {...settings}>
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
                <Col md={3}>
                  <ProductCard
                    name="Chilly Pickle"
                    price="120"
                    stock="in stock"
                    imageSource={product__image}
                    path="/productdetail"
                  />
                </Col>
              </Slider>
            </Row>

            {/* Ketchup & Sauces */}
            <p className="product__category"> Ketchup & Sauces </p>
            <Row className="product__row">
              <Slider {...settings}>
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
                <Col md={3}>
                  <ProductCard
                    name="Chilly Pickle"
                    price="120"
                    stock="in stock"
                    imageSource={product__image}
                    path="/productdetail"
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
