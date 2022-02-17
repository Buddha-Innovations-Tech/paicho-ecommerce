import React, { useState } from "react";
import { Col, Container, Row,Modal,InputGroup } from "react-bootstrap";
import Logo from "../../assets/images/paichologo.png";
import { FiSearch } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import InputForm from "../InputForm";
import GoogleIcon from "../../assets/images/googleicon.png";
import Facebookicon from "../../assets/images/facebookicon.png";

const NavBar = () => {
  const [account, setAccount] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

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
                          onClick={handleShow}
                        >
                          Sign In
                        </Link>
                      </li>
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
                      <li>
                        <Link to="" className="account-create"  onClick={handleShow1}>
                          Create Account
                        </Link>
                      </li>
                      <div className="accoount-create-modal">
                      <Modal show={show1} onHide={handleClose1}>
                        <Modal.Header closeButton>
                          <Modal.Title>
                            <p>Create Your Paicho Account</p>
                            <span>Please fill in the form correctly to sign up your paicho account</span>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Row>
                            <Col md={6}>
                         <div className="mt-4">
                           <InputForm label="First Name" type="text" placeholder="Enter Your First Name" name="firstname" asteric="*"  />
                         </div>
                            </Col>
                            <Col md={6}>
                         <div className="mt-4">
                           <InputForm label="Last Name" type="text" placeholder="Enter Your Last Name" name="lastname" asteric="*"/>
                         </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6}>
                         <div className="mt-4">
                           <InputForm label="Email Address" type="email" placeholder="Enter Your Email Address" name="mobilenum"  asteric="*"/>
                         </div>
                            </Col>
                            <Col md={6}>
                            <div className="mt-4">
                           <InputForm label="Mobile Number" type="num" placeholder="Enter Your Mobile Number" name="mobilenumber"  />
                         </div>
                        
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6}>
                            <div className="mt-4">
                           <InputForm label="Password" type="password" placeholder="Enter Your Password" name="password" asteric="*"/>
                         </div>
                            </Col>
                            <Col md={6}>
                         <div className="mt-4">
                           <InputForm label=" Confirm Password" type="password" placeholder="Confirm Your Password" name="confirmpassword" asteric="*"/>
                         </div>
                            </Col>
                          </Row>
                          <div className="createaccount">
                          <InputGroup.Checkbox />
                          <p>Creating an account means you’re okay with our <Link to="">Terms of Service</Link>  and <Link to="">Privacy Policy</Link> </p>
                          </div>
                         <button className=" sign-in-btn ">Create Account</button>
                        
                        <p className="already-have-acc">Already have an account?<Link to=""> Sign In </Link></p>
                        </Modal.Body>
                      
                      </Modal>
                      </div>
                      <li>
                        <Link to="" className="account-accdetails">
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
          <div className="categories">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className="toggle-button">
                <MdOutlineDashboard className="dashboard-icon" />
                All Categories
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/paichopickle">
                  Paicho Pickle{" "}
                  <MdKeyboardArrowRight className="dropdown-item-icon" />
                  <ul className="dropdown-submenu">
                    <li>
                      <Link to="">Mango Pickle</Link>{" "}
                    </li>
                    <li>
                      <Link to="">Gooseberry Pickle</Link>
                    </li>
                    <li>
                      <Link to="">Lemon Pickle</Link>
                    </li>
                    <li>
                      <Link to="">Chilly Pickle</Link>
                    </li>
                    <li>
                      <Link to="">Paicho Bhutuk achar</Link>
                    </li>
                  </ul>
                </Dropdown.Item>
                <Dropdown.Item href="/processingproduct">
                  Processing Item{" "}
                  <MdKeyboardArrowRight className="dropdown-item-icon" />
                  <ul className="dropdown-submenu">
                    <li>
                      <Link to="">Paicho Mix Jam </Link>{" "}
                    </li>
                    <li>
                      <Link to="">Paicho Chuck</Link>
                    </li>
                    <li>
                      <Link to="">Khudo </Link>
                    </li>
                    <li>
                      <Link to="">Guava juice</Link>
                    </li>
                    <li>
                      <Link to="">Mixed Fruit Juice</Link>
                    </li>
                    <li>
                      <Link to="">Paicho sweetcorn</Link>
                    </li>
                    <li>
                      <Link to="">Paicho sweetcorn</Link>
                    </li>
                  </ul>
                </Dropdown.Item>

                <Dropdown.Item href="/grainsandpulses">
                  Grains & Pulses{" "}
                  <MdKeyboardArrowRight className="dropdown-item-icon" />
                </Dropdown.Item>
                <Dropdown.Item href="/indenginousproducts">
                  Indeginous Product{" "}
                  <MdKeyboardArrowRight className="dropdown-item-icon" />
                </Dropdown.Item>
                <Dropdown.Item href="/paichodryfoods">
                  Dry Food{" "}
                  <MdKeyboardArrowRight className="dropdown-item-icon" />
                </Dropdown.Item>
                <Dropdown.Item href="/ketchupandsauces">
                  Ketchup & Sauces{" "}
                  <MdKeyboardArrowRight className="dropdown-item-icon" />
                </Dropdown.Item>
                <Dropdown.Item href="/organicvegetables">
                  Organic Vegatable{" "}
                  <MdKeyboardArrowRight className="dropdown-item-icon" />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

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
