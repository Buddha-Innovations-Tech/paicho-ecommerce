import React, { useState } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
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

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                    onClick={handleShow}
                  />
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                      <ul className="account-btn">
                        <li>
                          <Link to="" className="account-signin">
                            Sign In
                          </Link>
                        </li>
                        <li>
                          <Link to="" className="account-create">
                            Create Account
                          </Link>
                        </li>
                        <li>
                          <Link to="" className="account-accdetails">
                            My Account Details
                          </Link>
                        </li>
                      </ul>
                    </Modal.Body>
                  </Modal>
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
                </Dropdown.Item>
                <Dropdown.Item href="/processingproduct">
                  Processing Item{" "}
                  <MdKeyboardArrowRight className="dropdown-item-icon" />
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
