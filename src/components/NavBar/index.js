import { BsFillCartFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";
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
import InputForm from "../InputForm";

import GoogleIcon from "../../assets/images/googleicon.png";
import Facebookicon from "../../assets/images/facebookicon.png";
import Logo from "../../assets/images/paichologo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import SubNav from "../SubNav";

const navItem = [
  {
    title: "Paicho Pickle",
    items: [
      { title: "Mango Pickle " },
      { title: "Gooseberry Pickle" },
      { title: "Lemon Pickle" },
      { title: "Chilly Pickle" },
      { title: "Paicho Bhutuk Achar" },
      { title: "def" },
    ],
  },
  {
    title: "Processing  Item",
    items: [
      { title: "Paicho Mix Jam" },
      { title: "Paicho Chuck" },
      { title: "Khudo" },
      { title: "Guava Juice" },
      { title: "Mixed Fruit Jiuce" },
      { title: "Paicho Sweetcorn" },
      { title: "Paicho Sweetcorn" },
    ],
  },
  {
    title: "Grains & Pulses",
    items: [
      { title: "Paicho Chamal " },
      { title: "Paicho Daal " },
      { title: "Phapar dana" },
      { title: "deKodoko Pithof" },
      { title: "Paicho Sweet Backwheat Pitho" },
      { title: "Paicho Gahat dana" },
      
    ],
  },
  {
    title: "Indeginous Product",
    items: [
      { title: "Paicho Sinki" },
      { title: "Paicho Masyaura" },
      { title: "Kabuno" },
      { title: "Nettle Powder" }, 
    ],
  },
  {
    title: "Dry Food",
    items: [
      { title: "Paicho Alaichi " },
      { title: "Paicho Aaapko Chana" },
      { title: "Paicho Bakulla dana " },
      { title: "Paicho Barro " },
      { title: "Paicho Besaar  " },
      { title: "Paicho Bhango   " },
      { title: "Paicho Sukeko Dalle  " },
      { title: "Paicho Dry Apple" },
      { title: "Paicho Sukeko Karela" },
    ],
  },
  {
    title: "Ketchup & Sauces",
    items: [
      { title: "Paicho Chilly Sauce" },
      { title: "Paicho Tomato Ketchup" },
      { title: "PaichoTomato Puree" },
      { title: "Paicho Vinegar " },
      { title: "Paicho Hot & Sweet  " },
      { title: "Paicho Mexican Sauce   " },
      { title: "Paicho Soya Sauce" },
    ],
  },
  {
    title: "Organic Vegetable",
    items: [
      { title: "Fresh Tomatoes" },
      { title: "Cauliflower " },
      { title: "Chillies" },
      { title: "Dalle Khursani " },
      { title: "Cabbage" },
      { title: "Potatoes" },
      { title: "Fresh Spring Onion" },
    ],
  },
];

const NavBar = () => {
  const [navbarshow, setNavbarShow] = useState(false);
  const [account, setAccount] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [signIn, setSignin] = useState(true);
  const [signUp, setSignup] = useState(true);
  const [hideSmallNavbar, setHideSmallNavbar] = useState(false);
  const signInHandler = () => {
    handleShow(true);
    setSignin(true);
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

  return (
    <>
      <Container>
        <div className="mobile-navbar">
          <div className="mobile-navbar-toggle">
            <Link to="/">
            <div>
              <img src={Logo} alt="" />
            </div>

            </Link>
            <GiHamburgerMenu
              className="hambergur-menu"
              onClick={() => setHideSmallNavbar(!hideSmallNavbar)}
            />
            {hideSmallNavbar ? (
              <>
                <div className="navbar-dropdown">
                  <ul className="navar-dropdown-ul">
                    {navItem.map((datas, index) => {
                      return (
                        <>
                          <SubNav
                            key={index}
                            title={datas.title}
                            items={datas.items}
                          
                          />
                        </>
                      );
                    })}
                  </ul>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="first-navbar">
          <Row className="d-flex align-items-center">
            <Col md={3}>
              <Link to="/">
                <figure className="logo">
                  <img src={Logo} alt="" />
                </figure>
              </Link>
            </Col>
            <Col md={7} sm={12}>
              <div className="imput-wrapper">
                <form action="">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Products"
                    // onChange={SearchHandler}
                    // value={search}
                  />
                </form>
                <FiSearch className="search-icon" />
              </div>
            </Col>
            <Col md={2}>
              <div className="dropdown-num d-flex justify-content-end align-items-center">
                <div className="navbarright-wrapper">
                  <span>
                    <Link to="">
                      <FaUserAlt
                        className="navbar-right-icon"
                        onClick={() => setAccount(!account)}
                      />
                    </Link>

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
                              {signIn ? (
                                <>
                                  <p>Sign In to your Paicho Account</p>
                                  <span>
                                    Please fill in the form correctly to sign in
                                    your paicho account
                                  </span>
                                </>
                              ) : (
                                <>
                                  <p>Create Your Paicho Account</p>
                                  <span>
                                    Please fill in the form correctly to sign up
                                    your paicho account
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
                                    Creating an account means you’re okay with
                                    our
                                    <Link to="">Terms of Service</Link> and
                                    <Link to="">Privacy Policy</Link>
                                  </p>
                                </div>
                                <button className=" sign-in-btn ">
                                  Create Account
                                </button>
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
                                <span onClick={() => setSignin(true)}>
                                  {" "}
                                  Sign In{" "}
                                </span>
                              )}
                            </p>
                          </Modal.Body>
                        </Modal>
                        <li>
                          <Link
                            to=""
                            className="account-create"
                            onClick={signInHandlerAccount}
                          >
                            Create Account
                          </Link>
                        </li>
                        <div className="accoount-create-modal">
                          <Modal show={show1} onHide={handleClose1}>
                            <Modal.Header closeButton>
                              <Modal.Title>
                                {signUp ? (
                                  <>
                                    <p>Create Your Paicho Account</p>
                                    <span>
                                      Please fill in the form correctly to sign
                                      up your paicho account
                                    </span>
                                  </>
                                ) : (
                                  <>
                                    <p>Sign In to your Paicho Account</p>
                                    <span>
                                      Please fill in the form correctly to sign
                                      in your paicho account
                                    </span>
                                  </>
                                )}
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              {signUp ? (
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
                                            name="email"
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
                                    <div className="createaccount">
                                      <InputGroup.Checkbox />
                                      <p>
                                        Creating an account means you’re okay
                                        with our
                                        <Link to="">Terms of Service</Link> and
                                        <Link to="">Privacy Policy</Link>
                                      </p>
                                    </div>
                                    <button className=" sign-in-btn ">
                                      Create Account
                                    </button>
                                  </Form>
                                </>
                              ) : (
                                <>
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
                              )}

                              <p className="already-have-acc">
                                Already have an account?
                                <Link to="">
                                  {" "}
                                  {signUp ? (
                                    <span onClick={signUpHandlerAccount}>
                                      {" "}
                                      Sign In
                                    </span>
                                  ) : (
                                    <span onClick={() => setSignup(true)}>
                                      Sign Up
                                    </span>
                                  )}
                                </Link>
                              </p>
                            </Modal.Body>
                          </Modal>
                        </div>
                        <li>
                          <Link to="/account" className="account-accdetails">
                            My Account
                          </Link>
                        </li>
                        <li>
                          <Link to="/wishlist" className="account-wishlistdetails">
                            Wishlist
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
                      <sup className="navbar-shopping-card-sup">0</sup>
                    </Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="second-nav-wrapper">
        <Container>
          <div className="categories  d-block d-lg-flex justify-content-between align-items-center">
            <div
              className="navbar-left"
              onClick={() => setNavbarShow(!navbarshow)}
            >
              <MdOutlineDashboard className="dashboard-icon" />
              <span>All Categories</span>
              <BiChevronDown className="downarrow-icon" />

              {navbarshow ? (
                <div className="navbar-dropdown">
                  <ul className="navar-dropdown-ul">
                    <li className="navar-dropdown-li">
                      <div className="navbardropdown-flex">
                      <Link to="/paichopickle">
                        Paicho Pickle
                      </Link>
                      <MdKeyboardArrowRight className="dropdown-item-icon" />
                      </div>
                      <ul className="dropdown-submenu">
                        <li>
                          <Link to="/productdetail">Mango Pickle</Link>
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
                    <div className="navbardropdown-flex">
                      <Link to="/paichopickle">
                        Processing Item
                      </Link>
                      <MdKeyboardArrowRight className="dropdown-item-icon" />
                      </div>
                      <ul className="dropdown-submenu">
                        <li>
                          <Link to="/productdetail">Paicho Mix Jam </Link>
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
                    <div className="navbardropdown-flex">
                      <Link to="/paichopickle">
                       Grains & Pulses
                      </Link>
                      <MdKeyboardArrowRight className="dropdown-item-icon" />
                      </div>
                      <ul className="dropdown-submenu">
                        <li>
                          <Link to="/productdetail">Paicho Chamal </Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Paicho Daal </Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Phapar dana</Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Kodoko Pitho</Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Paicho Sweet Backwheat Pitho</Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Paicho Sweet Backwheat Pitho</Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Paicho Gahat dana</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="navar-dropdown-li">
                    <div className="navbardropdown-flex">
                      <Link to="/paichopickle">
                       Indengious Products
                      </Link>
                      <MdKeyboardArrowRight className="dropdown-item-icon" />
                      </div>
                      <ul className="dropdown-submenu">
                        <li>
                          <Link to="/productdetail">Paicho Sinki</Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Paicho Masyaura</Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Kabuno </Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Nettle Powder</Link>
                        </li>
                       
                      </ul>
                    </li>
                    <li className="navar-dropdown-li">
                    <div className="navbardropdown-flex">
                      <Link to="/paichopickle">
                        Dry Foods
                      </Link>
                      <MdKeyboardArrowRight className="dropdown-item-icon" />
                      </div>
                      <ul className="dropdown-submenu">
                        <li>
                          <Link to="/productdetail">Paicho Alaichi  </Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Paicho Aaapko Chana </Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Paicho Bakulla dana </Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Paicho Barro </Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Paicho Besaar</Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Paicho Sukeko Dalle  </Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Paicho Dry Apple</Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Paicho Sukeko Karela</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="navar-dropdown-li">
                    <div className="navbardropdown-flex">
                      <Link to="/paichopickle">
                       Ketchup & sauces
                      </Link>
                      <MdKeyboardArrowRight className="dropdown-item-icon" />
                      </div>
                      <ul className="dropdown-submenu">
                        <li>
                          <Link to="/productdetail">Paicho Chilly Sauce  </Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Paicho Tomato Ketchup </Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Paicho Tomato Puree </Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Paicho Vinegar  </Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Paicho Hot & Sweet  </Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Paicho Soya Sauce  </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="navar-dropdown-li">
                    <div className="navbardropdown-flex">
                      <Link to="/paichopickle">
                       Organic Vegetables
                      </Link>
                      <MdKeyboardArrowRight className="dropdown-item-icon" />
                      </div>
                    <ul className="dropdown-submenu">
                        <li>
                          <Link to="/productdetail">Fresh Tomatoes</Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Cauliflower </Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Chillies </Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Dalle Khursani </Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Cabbage </Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Potatoes </Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Fresh Spring Onion </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>

            <Link to="" className="about-paicho">
              About Paicho
            </Link>
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
