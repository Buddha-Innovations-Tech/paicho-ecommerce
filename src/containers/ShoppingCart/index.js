import {
  Container,
  Row,
  Col,
  Table,
  InputGroup,
  Modal,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
// import { ImCross } from "react-icons/im";
import { RiDeleteBinLine } from "react-icons/ri";

import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartTable from "../../components/CartTable.js";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import {
  subtractFromCart,
  increaseCart,
  addFromCart,
  removeFromCart,
  removeAllCart,
} from "../../actions/cartAddedAction.js";
import { CgChevronDoubleLeft } from "react-icons/cg";
import Productimage from "../../assets/images/ProductImage.png";
import IncrementDecrement from "../../components/IncrementDecrement";
import { useDispatch } from "react-redux";
import { BiPlus, BiMinus } from "react-icons/bi";
import ClearCart from "../ClearCart/index.js";
import { register, login, logout } from "../../actions/subscriberaction";
import GoogleIcon from "../../assets/images/googleicon.png";
import Facebookicon from "../../assets/images/facebookicon.png";

const ShoppingCart = () => {
  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);
  const [carts, setCarts] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [signIn, setSignin] = useState(true);
  const [signUp, setSignup] = useState(true);
  const [mobilenumber, setMobilenumber] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [mobileErr, setMobileErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [lastNameErr, setLastNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const { error } = useSelector((state) => state.subscriberRegister);

  const { cartItems } = useSelector((state) => state.cart);
  const { subscriberInfo,error: loginsubscribererror,success: loginsubscribersuccess } = useSelector((state) => state.subscriberLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dlt = (id) => {
    const dltcart = carts.filter((i) => i.id !== id);
    setCarts(dltcart);
    localStorage.setItem("carts", JSON.stringify(carts));
  };
  const signInHandler = () => {
    if (subscriberInfo) {
      navigate("/checkout");
    } else {
      handleShow(true);
      setSignin(true);
    }
  };

  const signUpHandler = () => {
    setSignin(false);
  };
  const signInHandlerAccount = () => {
    handleShow1(true);
    setSignup(true);
  };
  const signUpHandlerAccount = () => {
    setSignup(false);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(mobilenumber, password));
  };
  const validate = () => {
    if (firstname === "") {
      setFirstNameErr(true);
    }
    if (lastname === "") {
      setLastNameErr(true);
    }
    if (mobilenumber !== 10) {
      setMobileErr(true);
    }
    if (email === "") {
      setEmailErr(true);
    }
    if (password !== confirmpassword) {
      setPasswordErr(true);
    }
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      mobilenumber === "" ||
      password === "" ||
      confirmpassword === ""
    ) {
      return false;
    } else {
      return true;
    }
  };
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    const check = validate();
    if (check === true) {
      dispatch(
        register(
          firstname,
          lastname,
          email,
          mobilenumber,
          password,
          confirmpassword
        )
      );
      handleClose1();
    }
  };
  var totalcartprice = 0;
  var discountInBill = 0;
  var grandTotal = 0;

  const add = (id) => {
    dispatch(addFromCart(id));
  };
  const subtract = (id) => {
    dispatch(subtractFromCart(id));
  };
  const removeSingleCart = (id) => {
    dispatch(removeFromCart(id));
  };
  const removeAll = () => {
    dispatch(removeAllCart());
  };

  useEffect(() => {
    setCarts(JSON.parse(localStorage.getItem("carts")));
  }, []);
  useEffect(() => {
    if (loginsubscribersuccess) {
      handleClose();
    }
  }, [loginsubscribersuccess]);
  return (
    <>
      <NavBar />
      <Container>
        {cartItems.length === 0 ? (
          <ClearCart />
        ) : (
          <>
            <Row>
              <Col md={8} sm={12} className="shoppingcart-btn">
                <div className="carttable">
                  <div className="d-flex justify-content-end align-items-center">
                    {/* <div className="carttable__heading d-flex align-items-center">
                      <InputGroup.Checkbox />
                      <span className="carttable__heading--selectitem">
                        Select All(3 items)
                      </span>
                    </div> */}
                    <div className="carttable__heading d-flex align-items-center">
                      <RiDeleteBinLine className="carttable__heading--deleteicon" />
                      <span
                        className="carttable__heading--selectitem"
                        onClick={handleShow5}
                      >
                        <u>Clear Cart</u>
                      </span>
                      <Modal show={show5} onHide={handleClose5}>
                        <Modal.Body>
                          <div className="arrow-left"></div>

                          <div className="cart__modal">
                            <p className="cart__modal--ask">
                              Are you sure you want to clear your cart?
                            </p>
                            <Link to="" className="yes-btn" onClick={removeAll}>
                              Yes
                            </Link>
                            <br />
                            <button className="no-btn" onClick={handleClose5}>
                              No
                            </button>
                          </div>

                          <div className="arrow-right"></div>
                        </Modal.Body>
                      </Modal>
                    </div>
                  </div>
                  <div className="carttable__maintable">
                    <Row className="carttable__maintable--firstrow">
                      <Col
                        lg={4}
                        style={{ paddingLeft: "60px" }}
                        className="title"
                      >
                        Item List
                      </Col>
                      <Col lg={2}>Quantity</Col>
                      <Col lg={2}>Unit Cost</Col>
                      <Col lg={2}>Subtotal</Col>
                      <Col lg={2}>Action</Col>
                    </Row>

                    {cartItems.length > 0 &&
                      cartItems.map((data, index) => {
                        discountInBill +=
                          (data.discount / 100) * data.price * data.qty;
                        totalcartprice += data.price * data.qty;
                        grandTotal = totalcartprice - discountInBill + 0;

                        return (
                          <Row className="mt-3 mb-3 mapping-row" key={index}>
                            <Col
                              lg={4}
                              className="carttable__maintable--firstdata"
                            >
                              <div
                                className="d-flex align-items-center"
                                style={{ width: "225px" }}
                              >
                                {/* <InputGroup.Checkbox className="checkbox" /> */}
                                <img
                                  src={data.image[0]}
                                  alt=""
                                  className="ms-4"
                                />
                                <div>
                                  <p>{data.name}</p>
                                  <span>Category:{data.category.name}</span>
                                </div>
                              </div>
                            </Col>

                            <Col lg={2}>
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
                                          {" "}
                                          <span> {data.qty}</span>
                                        </td>
                                        <td
                                          className="incredecre__inc-dec--button--dec plus"
                                          onClick={() => add(data.id)}
                                        >
                                          <BiPlus />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </Col>
                            <Col lg={2}>
                              <div className="unit">{data.price}</div>
                            </Col>
                            {window.location.href.includes("shoppingcart") && (
                              <Col lg={2}>
                                <div className="unit">
                                  {data.price * data.qty}
                                </div>
                              </Col>
                            )}
                            {window.location.href.includes("wishlist") && (
                              <Col lg={2}>
                                <button className="carttable__maintable--crossicon">
                                  Add to Cart
                                </button>
                              </Col>
                            )}
                            <Col
                              lg={2}
                              className="carttable__maintable--deleteicon icon"
                            >
                              <RiDeleteBinLine
                                onClick={() => {
                                  removeSingleCart(data.id);
                                  // dlt(data.id);
                                }}
                              />
                            </Col>
                          </Row>
                        );
                      })}
                  </div>
                </div>
              </Col>
              <Col md={4} sm={12}>
                <div className="shopcartrightbox">
                  <Table>
                    <tbody>
                      <tr>
                        <td className="shopcartrightbox__heading">
                          Order Summary
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex justify-content-between align-items-center shopcartrightbox__content">
                            <p>Total M.R.P</p>
                            <p>Rs.{totalcartprice}</p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center shopcartrightbox__content">
                            <p>Discount</p>
                            <p>Rs.{discountInBill.toFixed(2)}</p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center shopcartrightbox__content">
                            <p>Shipping Charge</p>
                            <p>Rs.0</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex justify-content-between align-items-center shopcartrightbox__total">
                            <p>Grand Total</p>
                            <p>Rs.{grandTotal}</p>
                          </div>
                          <div className="shopcartrightbox__divbtn">
                            <button
                              className="shopcartrightbox__divbtn--buttonn"
                              onClick={(e) => {
                                e.preventDefault();
                                signInHandler();
                              }}
                            >
                              Checkout
                            </button>

                            <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>
                                  {signIn ? (
                                    <>
                                      <p>Sign In to your Paicho Account</p>
                                      <span>
                                        Please fill in the form correctly to
                                        sign in your paicho account
                                      </span>
                                    </>
                                  ) : (
                                    <>
                                      <p>Create Your Paicho Account</p>
                                      <span>
                                        Please fill in the form correctly to
                                        sign up your paicho account
                                      </span>
                                    </>
                                  )}
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                {signIn ? (
                                  <>
                                    {loginsubscribererror && (
                                        <p className="register-error">
                                          {loginsubscribererror}
                                        </p>
                                      )}
                                      {loginsubscribersuccess && <p style={{color:"green",marginTop:"5px",fontSize:"20px"}}>Login SuccessFul</p>}
                                    <Form onSubmit={handleLoginSubmit}>
                                      <div className="mt-4 position-relative">
                                        <Form.Label>
                                          Mobile Number <sup>*</sup>
                                        </Form.Label>
                                        <InputGroup>
                                          <FormControl
                                            label="Mobile Number"
                                            type="number"
                                            placeholder="Enter Your Mobile Number"
                                            name="mobilenumber"
                                            asteric="*"
                                            value={mobilenumber}
                                            onChange={(e) =>
                                              setMobilenumber(e.target.value)
                                            }
                                            required
                                          />
                                        </InputGroup>
                                      </div>
                                      <div className="mt-4 position-relative">
                                        <Form.Label>
                                          Password <sup>*</sup>
                                        </Form.Label>
                                        <InputGroup>
                                          <FormControl
                                            label="Password"
                                            type="password"
                                            placeholder="Enter Your Password"
                                            name="password"
                                            value={password}
                                            onChange={(e) =>
                                              setPassword(e.target.value)
                                            }
                                            asteric="*"
                                            required
                                          />
                                        </InputGroup>
                                      </div>

                                      <Button
                                        className="sign-in-btn"
                                        type="submit"
                                      >
                                        Sign In
                                      </Button>
                                      <Link to="" className="forget-password">
                                        <u>Forget Password?</u>
                                      </Link>
                                    </Form>
                                  </>
                                ) : (
                                  <>
                                    <Form onSubmit={handleSubmitRegister}>
                                      <Row>
                                        <Col md={6}>
                                          <div className="mt-4">
                                            <Form.Label>
                                              First Name <sup>*</sup>
                                            </Form.Label>
                                            <InputGroup>
                                              <FormControl
                                                label="First Name"
                                                type="text"
                                                placeholder="Enter Your First Name"
                                                name="firstname"
                                                value={firstname}
                                                onChange={(e) =>
                                                  setFirstName(e.target.value)
                                                }
                                                asteric="*"
                                                required
                                              />
                                            </InputGroup>
                                            {firstNameErr && firstname.length<=0 && <p className="register-error">FirstName is required</p>}

                                          </div>
                                        </Col>
                                        <Col md={6}>
                                          <div className="mt-4">
                                            <Form.Label>
                                              Last Name <sup>*</sup>
                                            </Form.Label>
                                            <InputGroup>
                                              <FormControl
                                                label="Last Name"
                                                type="text"
                                                placeholder="Enter Your Last Name"
                                                name="lastname"
                                                value={lastname}
                                                onChange={(e) =>
                                                  setLastName(e.target.value)
                                                }
                                                asteric="*"
                                                required
                                              />
                                            </InputGroup>
                                            {lastNameErr && lastname.length<=0 && <p className="register-error">LastName is required</p>}

                                          </div>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col md={6}>
                                          <div className="mt-4">
                                            <Form.Label>
                                              Email <sup>*</sup>
                                            </Form.Label>
                                            <InputGroup>
                                              <FormControl
                                                label="Email Address"
                                                type="email"
                                                placeholder="Enter Your Email Address"
                                                name="email"
                                                value={email}
                                                onChange={(e) =>
                                                  setEmail(e.target.value)
                                                }
                                                asteric="*"
                                                required
                                              />
                                            </InputGroup>
                                            {emailErr && email.length<=0 && <p className="register-error">Firstname is required</p>}

                                          </div>
                                        </Col>
                                        <Col md={6}>
                                          <div className="mt-4">
                                            <Form.Label>
                                              Mobile Number <sup>*</sup>
                                            </Form.Label>
                                            <InputGroup>
                                              <FormControl
                                                label="Mobile Number"
                                                type="number"
                                                placeholder="Enter Your Mobile Number"
                                                name="mobilenumber"
                                                value={mobilenumber}
                                                onChange={(e) =>
                                                  setMobilenumber(
                                                    e.target.value
                                                  )
                                                }
                                                asteric="*"
                                                required
                                              />
                                            </InputGroup>
                                            {mobileErr && mobilenumber.length !=10 && <p className="register-error">Mobile number must be of 10 digits.</p>}

                                          </div>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col md={6}>
                                          <div className="mt-4">
                                            <Form.Label>
                                              Password <sup>*</sup>
                                            </Form.Label>
                                            <InputGroup>
                                              <FormControl
                                                label="Password"
                                                type="password"
                                                placeholder="Enter Your Password"
                                                name="password"
                                                value={password}
                                                onChange={(e) =>
                                                  setPassword(e.target.value)
                                                }
                                                asteric="*"
                                                required
                                              />
                                            </InputGroup>
                                          </div>
                                        </Col>
                                        <Col md={6}>
                                          <div className="mt-4">
                                            <Form.Label>
                                              Confirm Password <sup>*</sup>
                                            </Form.Label>
                                            <InputGroup>
                                              <FormControl
                                                label=" Confirm Password"
                                                type="password"
                                                placeholder="Confirm Your Password"
                                                name="confirmpassword"
                                                value={confirmpassword}
                                                onChange={(e) =>
                                                  setConfirmPassword(
                                                    e.target.value
                                                  )
                                                }
                                                asteric="*"
                                                required
                                              />
                                            </InputGroup>
                                          </div>
                                        </Col>
                                        {passwordErr && password!== confirmpassword &&  <p className="register-error">Password must be matched</p>}

                                      </Row>
                                      <div className="createaccount">
                                        <InputGroup.Checkbox />
                                        <p>
                                          Creating an account means you’re okay
                                          with our
                                          <Link to="">
                                            Terms of Service
                                          </Link>{" "}
                                          and
                                          <Link to="">Privacy Policy</Link>
                                        </p>
                                      </div>
                                      <button
                                        className=" sign-in-btn "
                                        onClick={handleSubmitRegister}
                                      >
                                        Create Account
                                      </button>
                                      {error && <h4>{error}</h4>}
                                    </Form>
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
                                    <span onClick={signUpHandler}>
                                      {" "}
                                      Sign Up{" "}
                                    </span>
                                  ) : (
                                    <span onClick={() => setSignin(true)}>
                                      Sign In{" "}
                                    </span>
                                  )}
                                </p>
                              </Modal.Body>
                            </Modal>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
            <div className="carttable__pagination">
              <Link to="/">
                <CgChevronDoubleLeft className="me-2" />
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </Container>

      <Footer />
    </>
  );
};

export default ShoppingCart;
