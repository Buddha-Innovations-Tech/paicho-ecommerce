import {
  Col,
  Container,
  Row,
  Modal,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCarousel } from "../../actions/carouselAction";
import ProductCard from "../../components/ProductCard";
import GoogleIcon from "../../assets/images/googleicon.png";
import Facebookicon from "../../assets/images/facebookicon.png";
import { listProducts } from "../../actions/productAction";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Slider from "react-slick";
import InputForm from "../../components/InputForm";
import { listCategories, createCategory } from "../../actions/categoryAction";
import {
  removeAllCart
} from "../../actions/cartAddedAction.js";
const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    // ],
  };

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productList);
  const { carousel } = useSelector((state) => state.carouselList);
  const { subscriberInfo } = useSelector((state) => state.subscriberLogin);
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [showA, setShowA] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [signIn, setSignin] = useState(true);
  const signInHandler = () => {
    handleShow(true);
    setSignin(true);
  };
  const signUpHandler = () => {
    setSignin(false);
  };

  useEffect(() => {
    dispatch(listCarousel());
  }, [dispatch]);
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
    const { categories, pages, page, loading } = useSelector(
    (state) => state.categoryList
  );
  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);
  
  return (
    <>
      <section className="home">
        <NavBar />

        {/* hero-section */}
        <section className="hero">
          <Container>
            <Row>
              <Slider {...settings}>
                {carousel?.carousels &&
                  carousel?.carousels.length > 0 &&
                  carousel?.carousels.map((curEm) => {
                    return (
                      <>
                        <Row>
                          <Col md={6}>
                            <div className="hero__content">
                              <h2 className="hero__content--heading mb-13">
                                {curEm.title}
                              </h2>
                              <p className="hero__content--para mb-32">
                                {curEm.description}
                              </p>{" "}
                              <br />
                              <Link
                                to={curEm.link}
                                className="btn__buy"
                                // onClick={signInHandler}
                              >
                                Buy Now
                              </Link>
                            </div>
                          </Col>

                          <Col md={6}>
                            <div className="hero__banner">
                              <img
                                src={curEm.image[0]}
                                className="hero__banner--img"
                                alt=""
                              />
                            </div>
                          </Col>
                        </Row>
                      </>
                    );
                  })}
              </Slider>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    {signIn ? (
                      <>
                        <p>Sign In to your Paicho Account</p>
                        <span>
                          Please fill in the form correctly to sign in your
                          paicho account
                        </span>
                      </>
                    ) : (
                      <>
                        <p>Create Your Paicho Account</p>
                        <span>
                          Please fill in the form correctly to sign up your
                          paicho account
                        </span>
                      </>
                    )}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {signIn ? (
                    <>
                      <Form>
                        <div className="mt-4 position-relative">
                          <InputForm
                            label="Mobile Number"
                            type="number"
                            placeholder="Enter Your Mobile Number"
                            name="mobilenumber"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            asteric="*"
                            required
                          />
                        </div>
                        <div className="mt-4 position-relative">
                          <InputForm
                            label="Password"
                            type="password"
                            placeholder="Enter Your Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            asteric="*"
                            required
                          />
                        </div>

                        <Button className="sign-in-btn" type="submit">
                          Sign In
                        </Button>
                        <Link to="" className="forget-password">
                          <u>Forget Password?</u>
                        </Link>
                      </Form>
                    </>
                  ) : (
                    <>
                      <Form action="">
                        <Row>
                          <Col md={6}>
                            <div className="mt-4">
                              <InputForm
                                label="First Name"
                                type="text"
                                placeholder="Enter Your First Name"
                                name="firstname"
                                value={firstname}
                                onChange={(e) => setFirstName(e.target.value)}
                                asteric="*"
                              />
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="mt-4">
                              <InputForm
                                label="Last Name"
                                type="text"
                                placeholder="Enter Your Last Name"
                                name="lastname"
                                value={lastname}
                                onChange={(e) => setLastName(e.target.value)}
                                asteric="*"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <div className="mt-4">
                              <InputForm
                                label="Email Address"
                                type="email"
                                placeholder="Enter Your Email Address"
                                name="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                asteric="*"
                              />
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="mt-4">
                              <InputForm
                                label="Mobile Number"
                                type="num"
                                placeholder="Enter Your Mobile Number"
                                name="mobilenumber"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                asteric="*"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <div className="mt-4">
                              <InputForm
                                label="Password"
                                type="password"
                                placeholder="Enter Your Password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                asteric="*"
                              />
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="mt-4">
                              <InputForm
                                label=" Confirm Password"
                                type="password"
                                placeholder="Confirm Your Password"
                                name="confirmpassword"
                                value={confirmpassword}
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
                                asteric="*"
                              />
                            </div>
                          </Col>
                        </Row>
                      </Form>
                      <div className="createaccount">
                        <InputGroup.Checkbox />
                        <p>
                          Creating an account means you’re okay with our
                          <Link to="">Terms of Service</Link> and
                          <Link to="">Privacy Policy</Link>
                        </p>
                      </div>
                      <button className=" sign-in-btn ">Create Account</button>
                    </>
                  )}

                  <p className="or">or</p>

                  <div className="signin-socialmediaicon">
                    <img src={Facebookicon} alt="" />
                    <img src={GoogleIcon} alt="" />
                  </div>
                  <p className="dont-haveacc">
                    Don't have an account?
                    {signIn ? (
                      <span onClick={signUpHandler}> Sign Up </span>
                    ) : (
                      <span onClick={() => setSignin(true)}> Sign In </span>
                    )}
                  </p>
                </Modal.Body>
              </Modal>
            </Row>
          </Container>
        </section>

        {/* Categories */}
        <section className="product">
          <Container>
            {categories &&
              categories.map((curElm, index) => {
                return (
                  <>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="product__category">{curElm?.name} </p>
                      <Link to={curElm?.name}>
                        <span className="see__more">See More</span>
                      </Link>
                    </div>
                    <Row className="product__row gy-3">
                      {products&& products?.filter((b)=>b.category?.name===curElm.name)
                        ?.filter((x)=>x.removeStatus===false)
                          ?.filter((i, index) => index < 4)
                          .map((curElm, index) => {
                            return (
                              <Col md={3}>
                                <ProductCard key={index} {...curElm} />
                              </Col>
                            );
                          })}
                    </Row>
                  </>
                );
              })}

            {/* <div className="d-sm-flex justify-content-between">
              <p className="product__category">Paicho Processing Products </p>
              <Link to="/Processing Products">
                <span className="see__more">See More</span>
              </Link>
            </div>
            <Row className="product__row gy-3">
              {products &&
                products
                  ?.filter(
                    (i) =>
                      i.category && i.category.name === "Processing Products"
                  )
                  .map((curElm, index) => {
                    return (
                      <Col md={3}>
                        <ProductCard key={index} {...curElm} />
                      </Col>
                    );
                  })}
            </Row>

           
            <div className="d-sm-flex justify-content-between">
              <p className="product__category">Grains & Pulses </p>
              <Link to="/Grain & Pulses">
                <span className="see__more">See More</span>
              </Link>
            </div>
            <Row className="product__row gy-3">
              {products &&
                products
                  ?.filter(
                    (i) => i.category && i.category.name === "Grain & Pulses"
                  )
                  .map((curElm, index) => {
                    return (
                      <Col md={3}>
                        <ProductCard key={index} {...curElm} />
                      </Col>
                    );
                  })}
            </Row>

            <div className="d-sm-flex justify-content-between">
              <p className="product__category">Indeginous Product </p>
              <Link to="/Indeginous Products">
                <span className="see__more">See More</span>
              </Link>
            </div>
            <Row className="product__row gy-3">
              {products &&
                products
                  ?.filter(
                    (i) =>
                      i.category && i.category.name === "Indeginous Products"
                  )
                  .map((curElm, index) => {
                    return (
                      <Col md={3}>
                        <ProductCard key={index} {...curElm} />
                      </Col>
                    );
                  })}
            </Row>

            <div className="d-sm-flex justify-content-between">
              <p className="product__category">Dry Foods </p>
              <Link to="/Paicho Dry Foods">
                <span className="see__more">See More</span>
              </Link>
            </div>
            <Row className="product__row gy-3">
              {products &&
                products
                  ?.filter(
                    (i) => i.category && i.category.name === "Paicho Dry Foods"
                  )
                  .map((curElm, index) => {
                    return (
                      <Col md={3}>
                        <ProductCard key={index} {...curElm} />
                      </Col>
                    );
                  })}
            </Row>
            <div className="d-sm-flex justify-content-between">
              <p className="product__category">Ketchup & Sauces </p>
              <Link to="/Katchup Sauce">
                <span className="see__more">See More</span>
              </Link>
            </div>
            <Row className="product__row gy-3">
              {products &&
                products
                  ?.filter(
                    (i) => i.category && i.category.name === "Katchup Sauce"
                  )
                  .map((curElm, index) => {
                    return (
                      <Col md={3}>
                        <ProductCard key={index} {...curElm} />
                      </Col>
                    );
                  })}
            </Row>

            <div className="d-sm-flex justify-content-between">
              <p className="product__category">Organic Vegetables </p>
              <Link to="/Organic Vegetables">
                <span className="see__more">See More</span>
              </Link>
            </div>
            <Row className="product__row gy-3">
              {products &&
                products
                  ?.filter(
                    (i) =>
                      i.category && i.category.name === "Organic Vegetables"
                  )
                  .map((curElm, index) => {
                    return (
                      <Col md={3}>
                        <ProductCard key={index} {...curElm} />
                      </Col>
                    );
                  })}
            </Row> */}
          </Container>
        </section>

        <Footer />
      </section>
    </>
  );
};

export default Home;
