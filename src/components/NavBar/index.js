import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Modal,
  InputGroup,
  Button,
  Form,
} from "react-bootstrap";
import Logo from "../../assets/images/paichologo.png";
import { FiSearch } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import InputForm from "../InputForm";
import GoogleIcon from "../../assets/images/googleicon.png";
import Facebookicon from "../../assets/images/facebookicon.png";

const NavBar = () => {
  const [navbarshow,setNavbarShow]=useState(false);
  const [account, setAccount] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [signIn, setSignin] = useState(true)
  const signInHandler = () => {
    handleShow(true)
    setSignin(true)
  }
  const signUpHandler = () => {
    setSignin(false)
  }

  return (
    <>
      <Container>
        <Row className="d-flex align-items-center">
          <Col md={2}>
            <Link to="/">
              <figure className="logo">
                <img src={Logo} alt="" />
              </figure>
            </Link>
          </Col>
          <Col md={6}>
            <div className="imput-wrapper">
              <input
                type="text"
                className="form-control"
                placeholder="Search Products"
              />
              <FiSearch className="search-icon" />
            </div>
          </Col>
          <Col md={4}>
            <div className="dropdown-num d-block d-lg-flex justify-content-between align-items-center">
              <div className="navbarright-wrapper">
                <span>
                  <Link to="/account">
                    <FaUserAlt className="navbar-right-icon" />
                    <span> My Account</span>
                  </Link>
                  <BiChevronDown
                    className="navbar-right-icon2"
                    onClick={() => setAccount(!account)}
                  />

                  {account ? (
                    <ul className="account-btn">
                      <li>
                        <Link
                          to=""
                          className="account-signin"
                          onClick={signInHandler}
                        >
                          Sign In
                        </Link>
                      </li>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>
                            {signIn ?<>
                              <p>Sign In to your Paicho Account</p>
                            <span>
                              Please fill in the form correctly to sign in your
                              paicho account
                            </span> 
                            </>: <>
                            <p>Create Your Paicho Account</p>
                              <span>
                                Please fill in the form correctly to sign up
                                your paicho account
                              </span>
                            </> }
                            
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          {signIn?
                          <Form>
                            <div className="mt-4 position-relative">
                              <InputForm
                                label="Mobile Number"
                                type="number"
                                placeholder="Enter Your Mobile Number"
                                name="mobilenumber"
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
                                asteric="*"
                                required
                              />
                            </div>

                            <Button className="sign-in-btn" type="submit">
                              Sign In
                            </Button>
                          </Form>:<>
                          <Form action="">
                            <Row>
                              <Col md={6}>
                                <div className="mt-4">
                                  <InputForm
                                    label="First Name"
                                    type="text"
                                    placeholder="Enter Your First Name"
                                    name="firstname"
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
                                    name="mobilenum"
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
                            <button className=" sign-in-btn ">
                              Create Account
                            </button>
                          </>}
                          <Link to="" className="forget-password">
                            <u>Forget Password?</u>
                          </Link>

                          <p className="or">or</p>

                          <div className="signin-socialmediaicon">
                            <img src={Facebookicon} alt="" />
                            <img src={GoogleIcon} alt="" />
                          </div>

                          <p className="dont-haveacc">
                            Don't have an account?{signIn?<span onClick={signUpHandler}> Sign Up </span> :<span onClick={()=> setSignin(true)}> Sign In </span>}
                          </p>
                        </Modal.Body>
                      </Modal>
                      <li>
                        <Link
                          to=""
                          className="account-create"
                          onClick={handleShow1}
                        >
                          Create Account
                        </Link>
                      </li>
                      <div className="accoount-create-modal">
                        <Modal show={show1} onHide={handleClose1}>
                          <Modal.Header closeButton>
                            <Modal.Title>
                            <p>Create Your Paicho Account</p>
                              <span>
                                Please fill in the form correctly to sign up
                                your paicho account
                              </span>
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <form action="">
                            <Row>
                              <Col md={6}>
                                <div className="mt-4">
                                  <InputForm
                                    label="First Name"
                                    type="text"
                                    placeholder="Enter Your First Name"
                                    name="firstname"
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
                                    name="mobilenum"
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
                                    asteric="*"
                                  />
                                </div>
                              </Col>
                            </Row>
                            </form>
                            <div className="createaccount">
                              <InputGroup.Checkbox />
                              <p>
                                Creating an account means you’re okay with our
                                <Link to="">Terms of Service</Link> and
                                <Link to="">Privacy Policy</Link>
                              </p>
                            </div>
                            <button className=" sign-in-btn ">
                              Create Account
                            </button>

                            <p className="already-have-acc">
                              Already have an account?
                              <Link to=""> Sign In </Link>
                            </p>
                          </Modal.Body>
                        </Modal>
                      </div>
                      <li>
                        <Link to="/account" className="account-accdetails">
                          My Account Details
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </span>
              </div>

              <div className="navbarright-wrapper">
                <span>
                  <Link to="/shoppingcart">
                    <BsFillCartFill className="navbar-right-icon" />
                    <span>My Cart</span>
                  </Link>
                  <Link to="/wishlist">
                    <BsFillHeartFill className="navbar-right-icon" />
                  </Link>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="second-nav-wrapper">
        <Container>
          <div className="categories  d-block d-lg-flex justify-content-between align-items-center"  >
            <div className="navbar-left" onMouseEnter={() => setNavbarShow(true)}
                    onMouseLeave={() => setNavbarShow(false)}>
            <MdOutlineDashboard className="dashboard-icon" />
            <span>All Categories</span>
            <BiChevronDown className="downarrow-icon"/>
          
            {navbarshow? 
            <div className="navbar-dropdown">
            <ul className="navar-dropdown-ul">
              <li className="navar-dropdown-li">
                <Link to="/paichopickle">
                  Paicho Pickle{" "}
                  <MdKeyboardArrowRight className="dropdown-item-icon" />
                </Link>
                <ul className="dropdown-submenu">
                  <li>
                    <Link to="/productdetail">Mango Pickle</Link>{" "}
                  </li>
                  <li>
                    <Link to="/productdetail">Gooseberry Pickle</Link>
                  </li>
                  <li>
                    <Link to="/productdetail">Lemon Pickle</Link>
                  </li>
                  <li>
                    <Link to="/productdetail">Chilly Pickle</Link>
                  </li>
                  <li>
                    <Link to="/productdetail">Paicho Bhutuk achar</Link>
                  </li>
                </ul>
              </li>
              <li className="navar-dropdown-li">
                <Link to="/processingproduct">
                  Processing Item{" "}
                  <MdKeyboardArrowRight className="dropdown-item-icon" />
                </Link>
                <ul className="dropdown-submenu">
                  <li>
                    <Link to="/productdetail">Paicho Mix Jam </Link>{" "}
                  </li>
                  <li>
                    <Link to="/productdetail">Paicho Chuck</Link>
                  </li>
                  <li>
                    <Link to="/productdetail">Khudo </Link>
                  </li>
                  <li>
                    <Link to="/productdetail">Guava juice</Link>
                  </li>
                  <li>
                    <Link to="/productdetail">Mixed Fruit Juice</Link>
                  </li>
                  <li>
                    <Link to="/productdetail">Paicho sweetcorn</Link>
                  </li>
                  <li>
                    <Link to="/productdetail">Paicho sweetcorn</Link>
                  </li>
                </ul>
              </li>
              <li className="navar-dropdown-li">
                <Link to="/grainsandpulses">
                  Grains & Pulses{" "}
                  <MdKeyboardArrowRight className="dropdown-item-icon" />
                </Link>
              </li>
              <li className="navar-dropdown-li">
                <Link to="/indenginousproducts">
                  Indeginous Product{" "}
                  <MdKeyboardArrowRight className="dropdown-item-icon" />
                </Link>
              </li >
              <li className="navar-dropdown-li">
                <Link to="/paichodryfoods">
                  {" "}
                  Dry Food
                  <MdKeyboardArrowRight className="dropdown-item-icon" />
                </Link>
              </li>
              <li className="navar-dropdown-li">
                <Link to="/ketchupandsauces">
                  Ketchup & Sauces{" "}
                  <MdKeyboardArrowRight className="dropdown-item-icon" />
                </Link>
              </li>
              <li className="navar-dropdown-li">
                <Link to="/organicvegetables">
                  Organic Vegatable{" "}
                  <MdKeyboardArrowRight className="dropdown-item-icon" />
                </Link>
              </li>
            </ul>
          </div>:""}
            </div>
           
          <Link to="" className="about-paicho">About Paicho</Link>
            <div className="delivery-num">
              <MdCall className="call-icon" />

              <p>For Delivery : 071-540545, 986745345</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NavBar;
