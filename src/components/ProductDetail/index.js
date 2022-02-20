import React, { useState } from "react";
import { Button, Col, Container, Row, Modal, Toast } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductPhoto from "../../assets/images/productdetail.png";
import Slider from "react-slick";
import Mangopickle from "../../assets/images/mango-pickle.png";
import Productphoto from "../../assets/images/ProductImage.png";
import ProductCard from "../ProductCard";
import IncrementDecrement from "../IncrementDecrement";
import { BsCheck } from "react-icons/bs";
import InputForm from "../../components/InputForm";
import GoogleIcon from "../../assets/images/googleicon.png";
import Facebookicon from "../../assets/images/facebookicon.png";

const ProductDetailComp = ({ stock }) => {
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
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
      <div className="product">
        <Container>
          <Row className="product__rows">
            <Col md={5}>
              <div className="product__image">
                <img src={ProductPhoto} alt="" className="img-fluid" />
              </div>
              <div className="product__sliders">
                <Slider {...settings}>
                  <div>
                    <img src={Mangopickle} alt="" />
                  </div>
                  <div>
                    <img src={Mangopickle} alt="" />
                  </div>
                  <div>
                    <img src={Mangopickle} alt="" />
                  </div>
                  <div>
                    <img src={Mangopickle} alt="" />
                  </div>
                  <div>
                    <img src={Mangopickle} alt="" />
                  </div>
                </Slider>
              </div>
            </Col>
            <Col md={7}>
              <div className="product__heading">
                <p className="product__heading--main">Mango Pickle </p>
                <span className="product__heading--span">
                  Category : Paicho Pickle | Product ID : 3021
                </span>
              </div>
              <div className="product__price">
                <span className="product__price--totalprice">
                  Price : Rs 180
                </span>
                <p className="product__price--stock">{stock}</p>
              </div>

              <div className="product__inc-dec d-flex">
                <p className="product__inc-dec--quantity ">Quantity</p>

                <IncrementDecrement />
              </div>
              <div className="product__btns">
                <Link
                  to=""
                  className="product__btns--addtocart"
                  onClick={toggleShowA}
                >
                  <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Body>
                      This item is added to your cart successfully !{" "}
                      <BsCheck className="checkicon" />{" "}
                    </Toast.Body>
                  </Toast>
                  Add To Cart
                </Link>
                {/* <Link className="product__btns--buynow" onClick={handleShow}>
                  Buy Now
                </Link>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <p>Sign In to your Paicho Account</p>
                      <span>
                        Please fill in the form correctly to sign in your paicho
                        account
                      </span>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="mt-4 position-relative">
                      <InputForm
                        label="Mobile Number"
                        type="num"
                        placeholder="Enter Your Mobile Number"
                        name="mobilenumber"
                        asteric="*"
                      />
                    </div>
                    <div className="mt-4 position-relative">
                      <InputForm
                        label="Password"
                        type="num"
                        placeholder="Enter Your Password"
                        name="password"
                        asteric="*"
                      />
                    </div>

                    <button className=" sign-in-btn">Sign In</button>

                    <Link to="" className="forget-password">
                      <u>Forget Password?</u>
                    </Link>

                    <p className="or">or</p>

                    <div className="signin-socialmediaicon">
                      <img src={Facebookicon} alt="" />
                      <img src={GoogleIcon} alt="" />
                    </div>

                    <p className="dont-haveacc">
                      Don't have an account?<Link to=""> Sign Up </Link>
                    </p>
                  </Modal.Body>
                </Modal> */}
                <Button className="btn__buy" onClick={handleShow}>
                  Buy Now
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <p>Sign In to your Paicho Account</p>
                      <span>
                        Please fill in the form correctly to sign in your paicho
                        account
                      </span>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="mt-4 position-relative">
                      <InputForm
                        label="Mobile Number"
                        type="num"
                        placeholder="Enter Your Mobile Number"
                        name="mobilenumber"
                        asteric="*"
                      />
                    </div>
                    <div className="mt-4 position-relative">
                      <InputForm
                        label="Password"
                        type="num"
                        placeholder="Enter Your Password"
                        name="password"
                        asteric="*"
                      />
                    </div>

                    <button className=" sign-in-btn">Sign In</button>

                    <Link to="" className="forget-password">
                      <u>Forget Password?</u>
                    </Link>

                    <p className="or">or</p>

                    <div className="signin-socialmediaicon">
                      <img src={Facebookicon} alt="" />
                      <img src={GoogleIcon} alt="" />
                    </div>

                    <p className="dont-haveacc">
                      Don't have an account?<Link to=""> Sign Up </Link>
                    </p>
                  </Modal.Body>
                </Modal>
              </div>

              <div className="product__lists">
                <p>About this Item </p>
                <ul>
                  <li> Fresh organic mangoes </li>
                  <li> Fresh organic mangoes </li>
                  <li> Fresh organic mangoes </li>
                  <li> Fresh organic mangoes </li>
                  <li> Fresh organic mangoes </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="product__description">
          <Container>
            <Row>
              <Col md={10}>
                <p className="product__description--heading">
                  Description of the Product
                </p>
                <p className="product__description--descriptionpara">
                  Eastern philosophy has described much about the significance
                  of pickle. Though less, it is inevitable part of our meal.
                  Spicy, bitter, sour taste pickle speaks of significance of
                  Nepali meal. It helps to crave for more food even if you have
                  no appetite for it. It adds taste to food by two folds. The
                  regular and balanced consumption of pickle also helps in
                  weight loss because it contains few calories.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="product__similaritems">
          <Container>
            <p className="product__similaritems--heading">
              Similar Items You Might Like
            </p>
            <Slider {...settings}>
              <div>
                <ProductCard
                  imageSource={Productphoto}
                  name="Paicho Mixed Jam"
                  price="120"
                  stock="in stock"
                />
              </div>
              <div>
                <ProductCard
                  imageSource={Productphoto}
                  name="Paicho Pineapple jam"
                  price="150"
                  stock="in stock"
                />
              </div>
              <div>
                <ProductCard
                  imageSource={Productphoto}
                  name="Orange Marmalate"
                  price="120"
                  stock="in stock"
                />
              </div>
              <div>
                <ProductCard
                  imageSource={Productphoto}
                  name="Chilly Pickle"
                  price="180"
                  stock="in stock"
                />
              </div>
              <div>
                <ProductCard
                  imageSource={Productphoto}
                  name="Chilly Pickle"
                  price="120"
                  stock="in stock"
                />
              </div>
            </Slider>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ProductDetailComp;
