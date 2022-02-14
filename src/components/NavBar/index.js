import React from "react";
import { Col, Container, Row } from "react-bootstrap";
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
  return (
    <>
      <Container>
        <Row className="d-flex align-items-center">
          <Col md={2}>
            <figure className="logo">
              <img src={Logo} alt="" />
            </figure>
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
            <div className="d-flex justify-content-between align-items-center">
              <div className="navbarright-wrapper">
                <span>
                  <FaUserAlt className="navbar-right-icon" />
                  <span> My Account</span>
                  <BiChevronDown className="navbar-right-icon2" />
                </span>
              </div>

              <div className="navbarright-wrapper">
                <span>
                  <BsFillCartFill className="navbar-right-icon" />
                  <span>My Cart</span>
                  <BsFillHeartFill className="navbar-right-icon" />
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
                <Dropdown.Item href="#paicho-pickle">
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
                <Dropdown.Item href="#/processing-item">
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

                <Dropdown.Item href="#/grainsandpulses">
                  Grains & Pulses{" "}
                  <MdKeyboardArrowRight className="dropdown-item-icon" />
                </Dropdown.Item>
                <Dropdown.Item href="#/indenginousproducts">
                  Indeginous Product{" "}
                  <MdKeyboardArrowRight className="dropdown-item-icon" />
                </Dropdown.Item>
                <Dropdown.Item href="#/dryfood">
                  Dry Food{" "}
                  <MdKeyboardArrowRight className="dropdown-item-icon" />
                </Dropdown.Item>
                <Dropdown.Item href="#/ketchupandsauces">
                  Ketchup & Sauces{" "}
                  <MdKeyboardArrowRight className="dropdown-item-icon" />
                </Dropdown.Item>
                <Dropdown.Item href="#/organicvegatble">
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
