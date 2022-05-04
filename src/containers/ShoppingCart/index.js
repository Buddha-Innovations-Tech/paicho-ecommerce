import { Container, Row, Col, Table, InputGroup, Modal } from "react-bootstrap";
// import { ImCross } from "react-icons/im";
import { RiDeleteBinLine } from "react-icons/ri";

import { Link } from "react-router-dom";
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

const ShoppingCart = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [carts, setCarts] = useState([]);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const dlt = (id) => {
    const dltcart = carts.filter((i) => i.id !== id);
    setCarts(dltcart);
    localStorage.setItem("carts", JSON.stringify(carts));
  };
  var totalcartprice = 0;
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

  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col md={8} sm={12} className="shoppingcart-btn">
            <div className="carttable">
              <div className="d-flex justify-content-between align-items-center">
                <div className="carttable__heading d-flex align-items-center">
                  <InputGroup.Checkbox />
                  <span className="carttable__heading--selectitem">
                    Select All(3 items)
                  </span>
                </div>
                <div className="carttable__heading d-flex align-items-center">
                  <RiDeleteBinLine className="carttable__heading--deleteicon" />
                  <span
                    className="carttable__heading--selectitem"
                    onClick={removeAll}
                  >
                    <u>Clear Cart</u>
                  </span>
                  {/* <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                      <div className="arrow-left"></div>

                      <div className="cart__modal">
                        <p className="cart__modal--ask">
                          Are you sure you want to clear your cart?
                        </p>
                        <Link to="" className="yes-btn" onClick={removeAll}>
                          Yes
                        </Link>
                        )
                        <br />
                        <button className="no-btn" onClick={handleClose}>
                          No
                        </button>
                      </div>

                      <div className="arrow-right"></div>
                    </Modal.Body>
                  </Modal> */}
                </div>
              </div>
              <div className="carttable__maintable">
                <Row className="carttable__maintable--firstrow">
                  <Col lg={4} style={{ paddingLeft: "60px" }} className="title">
                    Item List
                  </Col>
                  {/* <Col lg={1}>Unit</Col> */}
                  <Col lg={2}>Quantity</Col>
                  <Col lg={2}>Unit Cost</Col>
                  <Col lg={2}>Subtotal</Col>
                  <Col lg={2}>Action</Col>
                </Row>

                {cartItems.length > 0 &&
                  cartItems.map((data, index) => {
                    totalcartprice += data.price * data.qty;
                    return (
                      <Row className="mt-3 mb-3 mapping-row" key={index}>
                        <Col lg={4} className="carttable__maintable--firstdata">
                          <div
                            className="d-flex align-items-center"
                            style={{ width: "225px" }}
                          >
                            {/* <InputGroup.Checkbox className="checkbox" /> */}
                            <img src={data.image[0]} alt="" className="ms-4" />
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
                                      <span>{data.qty}</span>
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
                            <div className="unit">{data.price * data.qty}</div>
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
              <div className="carttable__pagination">
                <Link to="/">
                  <CgChevronDoubleLeft className="me-2" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div className="shopcartrightbox">
              <Table>
                <tbody>
                  <tr>
                    <td className="shopcartrightbox__heading">Order Summary</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex justify-content-between align-items-center shopcartrightbox__content">
                        <p>Total M.R.P</p>
                        <p>Rs.{totalcartprice}</p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center shopcartrightbox__content">
                        <p>Shipping</p>
                        <p>Rs.200</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex justify-content-between align-items-center shopcartrightbox__total">
                        <p>Grand Total</p>
                        <p>Rs.{totalcartprice}</p>
                      </div>
                      <div className="shopcartrightbox__divbtn">
                        <Link to="/checkout">
                          <button className="shopcartrightbox__divbtn--buttonn">
                            Checkout
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default ShoppingCart;
