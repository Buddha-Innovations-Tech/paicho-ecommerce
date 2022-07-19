import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Modal,
  Toast,
  Form,
  Button,
  InputGroup,
  Carousel,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductPhoto from "../../assets/images/productdetail.png";
import Slider from "react-slick";
import Mangopickle from "../../assets/images/mango-pickle.png";
import Productphoto from "../../assets/images/ProductImage.png";
import Productphoto2 from "../../assets/images/pineapple-juice.png";
import Productphoto3 from "../../assets/images/mixed-fruit-juice.png";
import ProductCard from "../ProductCard";
import IncrementDecrement from "../IncrementDecrement";
import { BsCheck } from "react-icons/bs";
import InputForm from "../../components/InputForm";
import GoogleIcon from "../../assets/images/googleicon.png";
import Facebookicon from "../../assets/images/facebookicon.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  subtractFromCart,
  addFromCart,
} from "../../actions/cartAddedAction";
import { BiPlus, BiMinus } from "react-icons/bi";
import { PRODUCT_DETAILS_FAIL } from "../../constants/productConstants";
import { Helmet } from "react-helmet";

const ProductDetailComp = ({ product, success }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 2,
    slidesToShow: 2,
    arrows: true,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const settingss = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    slidesToShow: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  const dispatch = useDispatch();
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
  const [image, setImage] = useState("");
  const [ingredient, setIngredient] = useState([]);
  const [similar, setSimilar] = useState([]);
  const { cartItems } = useSelector((state) => state.cart);

  var discountData =
    product?.price - (product?.discount / 100) * product?.price;

  const add = (id) => {
    dispatch(addFromCart(id));
  };
  const subtract = (id) => {
    dispatch(subtractFromCart(id));
  };
  const signInHandler = () => {
    handleShow(true);
    setSignin(true);
  };
  const signUpHandler = () => {
    setSignin(false);
  };
  useEffect(() => {
    if (product) {
      dispatch(addToCart(product));
    }
  }, [dispatch, product]);
  const send = (id, qty) => {
    dispatch(addToCart(id, qty));
    setShowA(true);
  };
  useEffect(() => {
    if (success) {
      setImage(product?.image && product?.image[0]);
    }
  }, [success]);

  return (
    <> 
    <Helmet>
    <title>{`Paicho-${product?.name}`}</title>
  </Helmet>
      <div className="product">
        <Container>
          <Row className="product__rows gx-5">
            <Col md={5}>
              {product?.image && product?.image?.length > 1 ? (
                <>
                  <div className="product__image">
                    <img src={image} alt="" className="img-fluid selected" />
                  </div>
                  <div className="product__sliders">
                    <Slider {...settings}>
                      {product?.image &&
                        product?.image?.map((data, index) => (
                          <>
                            <div
                              style={{
                                height: "100px",
                                width: "100px",
                                margin: "1px",
                                boxShadow:
                                  data === image &&
                                  "0px 0px 4px rgb(0 0 0 / 25%)",
                                borderRadius: data === image && "5px",
                              }}
                              key={index}
                            >
                              <img
                                className="product__sliders--image"
                                key={index}
                                src={data}
                                alt=""
                                onClick={() => setImage(data)}
                              />
                            </div>
                          </>
                        ))}
                    </Slider>
                  </div>
                </>
              ) : (
                <div className="product__image">
                  <img
                    src={product?.image && product?.image[0]}
                    alt=""
                    className="img-fluid selected"
                  />
                </div>
              )}
            </Col>
            <Col md={7}>
             
              <div className="product__heading">
                <p className="product__heading--main">{product?.name}</p>
                <span className="product__heading--span">
                  Category : {product?.category && product?.category.name}
                  {/* Product ID : {product._id} */}
                </span>
              </div>
              <div className="product__price">
                <div>
                  <span className="price">Rs {discountData}</span>
                  <div className="newpricediv">
                    <span className="previous_price">Rs{product?.price}</span>
                    <span className="new_price ms-3">
                      -{product?.discount} %
                    </span>
                  </div>
                </div>
                <p className="product__price--stock">{product?.stock}</p>
              </div>

              {cartItems.length > 0 &&
                cartItems
                  .filter((a) => a.id === product._id)
                  .map((data, index) => {
                    return (
                      <>
                        <div className="inc__dec">
                          <div className="incredecre__inc-dec--button">
                            <table>
                              <tbody>
                                <tr>
                                  <td
                                    className="incredecre__inc-dec--button--dec minus"
                                    onClick={() => subtract(data.id)}
                                  >
                                    <BiMinus />
                                  </td>
                                  <td className="incredecre__inc-dec--button--num">
                                    <span>{data.qty}</span>
                                  </td>
                                  {product.countInStock >= data.qty ? (
                                    <>
                                      <td
                                        className="incredecre__inc-dec--button--dec plus"
                                        onClick={() => add(data.id)}
                                      >
                                        <BiPlus />
                                      </td>
                                    </>
                                  ) : (
                                    ""
                                  )}
                                </tr>
                              </tbody>
                            </table>
                            <p>
                              {product.countInStock < data.qty &&
                                "Product is Out Of Stock"}
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })}

              {product?.countInStock !== 0 ? (
                <>
                  <div className="product__btns">
                    <Link
                      to=""
                      className="product__btns--addtocart"
                      onClick={() => send(product._id, 1)}
                    >
                      <Toast
                        onClose={() => setShowA(false)}
                        show={showA}
                        delay={2000}
                        autohide
                      >
                        <Toast.Body>
                          This item is added to your cart successfully !{" "}
                          <BsCheck className="checkicon" />
                        </Toast.Body>
                      </Toast>
                      Add To Cart
                    </Link>
                    <Link
                      to="/shoppingcart"
                      className="product__btns--buynow"
                      onClick={() => send(product._id, 1)}

                      // onClick={signInHandler}
                    >
                      Buy Now
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <p className="product-outofstock">Product is Out Of Stock.</p>
                </>
              )}

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
              <div className="product__lists">
                <p>Ingredients</p>
                <ul>
                  {product?.ingredient &&
                    product?.ingredient.map((i) => {
                      return <li> {i} </li>;
                    })}
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
                  {product?.description}
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

            {/* <Slider {...settingss}>
                {product?.similar &&
                  product?.similar.map((curElm, index) => {
                    return (
                          <ProductCard {...curElm} key={index} />
                    );
                  })}
              </Slider>
             */}
            <Row>
              <Carousel>
                {product?.similar &&
                  product?.similar.map((curElm, index) => {
                    return (
                      <Carousel.Item key={index}>
                        <Col lg={4}>
                          <ProductCard {...curElm} key={index} />
                        </Col>
                      </Carousel.Item>
                    );
                  })}
              </Carousel>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ProductDetailComp;
