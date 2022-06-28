import { BsFillCartFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdCall } from "react-icons/md";
import { Link, Navigate, useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Modal,
  InputGroup,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../../actions/categoryAction";

import GoogleIcon from "../../assets/images/googleicon.png";
import Facebookicon from "../../assets/images/facebookicon.png";
import Logo from "../../assets/images/paichologo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import SubNav from "../SubNav";
import { register, login, logout } from "../../actions/subscriberaction";

const NavBar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { subscriberInfo } = useSelector((state) => state.subscriberLogin);
  const { categories } = useSelector((state) => state.categoryList);
  const {error}=useSelector((state)=>state.subscriberRegister);
  // console.log(error);
  const dispatch = useDispatch();
  const ref = useRef();
  const [mobilenumber, setMobilenumber] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

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
  const [cartlength, setCartLength] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const searchHandle = () => {
    if (search !== "") {
      navigate(`/search/${search}`);
    }
  };
  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);
  const refetch = () => {
    let carts = localStorage.getItem("carts");
    console.log(carts);
    if (carts) {
      setCartLength(JSON.parse(carts));
    }
  };
  useEffect(() => {
    let carts = localStorage.getItem("carts");
    setCartLength(JSON.parse(carts));
    window.addEventListener("storage", () => {
      let carts = localStorage.getItem("carts");
      console.log(carts);
      if (carts) {
        setCartLength(JSON.parse(carts));
      }
    });
  }, []);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (navbarshow && ref.current && !ref.current.contains(e.target)) {
        setNavbarShow(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [navbarshow]);
  // useEffect(() => {
  //   const checkIfClickedOutside = (e) => {
  //     if (account && ref.current && !ref.current.contains(e.target)) {
  //       setAccount(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", checkIfClickedOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", checkIfClickedOutside);
  //   };
  // }, [account]);

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
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(mobilenumber, password));
    handleClose();
  };
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      alert("Password dont match");
    } else {
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
  const logOutHandlerAccount = () => {
    dispatch(logout());
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
                  <ul className="navar-dropdown-ul ">
                    {categories &&
                      categories.map((datas, index) => {
                        return (
                          <>
                            <SubNav
                              key={index}
                              title={datas.name}
                              items={datas.items}
                              categories={categories}
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
            <Col md={2}>
              <Link to="/">
                <figure className="logo">
                  <img src={Logo} alt="" />
                </figure>
              </Link>
            </Col>
            <Col md={6} sm={12}>
              <div className="imput-wrapper">
                <form action="" style={{ width: "100%" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Products"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </form>
                <FiSearch className="search-icon" onClick={searchHandle} />
              </div>
            </Col>
            <Col md={4}>
              <div className="dropdown-num d-flex justify-content-end align-items-center">
                <div className="navbarright-wrapper">
                  {subscriberInfo ? (
                    <>
                      <p className="subscriber_name">
                        {`${subscriberInfo.firstname} ${subscriberInfo.lastname}`}
                      </p>
                      <Link
                        to=""
                        className="account-logout"
                        onClick={logOutHandlerAccount}
                      >
                        Log Out
                      </Link>
                    </>
                  ) : (
                    <></>
                  )}
                  <span className="ms-4">
                    <Link to="">
                      <FaUserAlt
                        className="navbar-right-icon"
                        onClick={() => setAccount(!account)}
                      />
                    </Link>

                    {account ? (
                      <>
                        <ul className="account-btn">
                          {!subscriberInfo ? (
                            <>
                              <Link
                                to=""
                                className="account-signin"
                                onClick={signInHandler}
                              >
                                <li>Sign In</li>
                              </Link>
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
                                        </Row>
                                        <div className="createaccount">
                                          <InputGroup.Checkbox />
                                          <p>
                                            Creating an account means you’re
                                            okay with our
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
                              <Link
                                to=""
                                className="account-create"
                                onClick={signInHandlerAccount}
                              >
                                <li>Create Account</li>
                              </Link>

                              <div className="accoount-create-modal">
                                <Modal show={show1} onHide={handleClose1}>
                                  <Modal.Header closeButton>
                                    <Modal.Title>
                                      {signUp ? (
                                        <>
                                          <p>Create Your Paicho Account</p>
                                          <span>
                                            Please fill in the form correctly to
                                            sign up your paicho account
                                          </span>
                                        </>
                                      ) : (
                                        <>
                                          <p>Sign In to your Paicho Account</p>
                                          <span>
                                            Please fill in the form correctly to
                                            sign in your paicho account
                                          </span>
                                        </>
                                      )}
                                    </Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>
                                    {signUp ? (
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
                                                    asteric="*"
                                                    onChange={(e) =>
                                                      setFirstName(
                                                        e.target.value
                                                      )
                                                    }
                                                    required
                                                  />
                                                </InputGroup>
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
                                                      setLastName(
                                                        e.target.value
                                                      )
                                                    }
                                                    asteric="*"
                                                    required
                                                  />
                                                </InputGroup>
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
                                                    type="num"
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
                                                      setPassword(
                                                        e.target.value
                                                      )
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
                                          </Row>
                                          <div className="createaccount">
                                            <InputGroup.Checkbox />
                                            <p>
                                              Creating an account means you’re
                                              okay with our
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
                                        </Form>
                                      </>
                                    ) : (
                                      <>
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
                                                  setMobilenumber(
                                                    e.target.value
                                                  )
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
                                            onClick={handleLoginSubmit}
                                          >
                                            Sign In
                                          </Button>
                                          <Link
                                            to=""
                                            className="forget-password"
                                          >
                                            <u>Forget Password?</u>
                                          </Link>
                                        </Form>
                                      </>
                                    )}

                                    <p className="already-have-acc">
                                      Already have an account?
                                      <Link to="">
                                        {signUp ? (
                                          <span onClick={signUpHandlerAccount}>
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
                            </>
                          ) : (
                            ""
                          )}

                          <Link to="/account" className="account-accdetails">
                            <li>My Account</li>
                          </Link>
                          <Link
                            to="/wishlist"
                            className="account-wishlistdetails"
                          >
                            <li>Wishlist</li>
                          </Link>
                        </ul>
                      </>
                    ) : (
                      ""
                    )}
                  </span>
                </div>

                <div className="navbarright-wrapper">
                  <span>
                    <Link to="/shoppingcart">
                      <BsFillCartFill className="navbar-right-icon" />
                      <sup className="navbar-shopping-card-sup">
                        {cartItems.length}
                      </sup>
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
          <div
            className="categories  d-block d-lg-flex justify-content-between align-items-center"
            ref={ref}
          >
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
                    {categories &&
                      categories.map((curElm, index) => {
                        return (
                          <>
                            <Link
                              to={`/${curElm.name}`}
                              className="main-category"
                            >
                              <li className="navar-dropdown-li" key={index}>
                                <div className="navbardropdown-flex main-category">
                                  {curElm.name}
                                  <MdKeyboardArrowRight className="dropdown-item-icon" />
                                </div>
                                <ul className="dropdown-submenu">
                                  {categories &&
                                    curElm.subcategories.map((data, index) => {
                                      return (
                                        <Link
                                          to={`/${curElm.name}`}
                                          state={data.name}
                                          key={index}
                                        >
                                          <li>{data.name}</li>
                                        </Link>
                                      );
                                    })}
                                </ul>
                              </li>
                            </Link>
                          </>
                        );
                      })}
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
