import { Container, Row, Col, InputGroup, Modal } from "react-bootstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AccountSideNav from "../../components/AccoountSideNav";
import CartTable from "../../components/CartTable.js";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Productimage from "../../assets/images/ProductImage.png";
import { useSelector, useDispatch } from "react-redux";
import { CgChevronDoubleLeft } from "react-icons/cg";
import { BiPlus, BiMinus } from "react-icons/bi";
import { getSubscriberDetails } from "../../actions/subscriberaction";
import { deleteSingleWishlist,removeAllwhishlist } from "../../actions/wishListAction";
import { addToCart } from "../../actions/cartAddedAction";
import ClearCart from "../ClearCart";

const WhishList = () => {
  const { subscriber } = useSelector((state) => state.subscriberDetails);
  const { product } = useSelector((state) => state.productDetails);
  const { subscriberInfo } = useSelector((state) => state.subscriberLogin);
  const {success:wishListDltSucc}=useSelector((state)=>state.allWishlistDelete)
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { success: wishlistSuccess } = useSelector(
    (state) => state.wishlistDelete
  );
  // const [clearCart, setClearCart] = useState(mainTableData);
  useEffect(() => {
    dispatch(getSubscriberDetails("profile"));
  }, [dispatch]);
  useEffect(() => {
    if (wishlistSuccess) {
      dispatch(getSubscriberDetails("profile"));
    }
  }, [wishlistSuccess]);
 
  const removeWishlist = (id) => {
    dispatch(deleteSingleWishlist(id));
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (!subscriberInfo) {
      navigate("/");
    }
  }, [subscriberInfo]);
  const send = (id, qty) => {
    dispatch(addToCart(id, qty));
  };
  const removeAll=()=>{
    dispatch(removeAllwhishlist());
    handleClose();
  }
  useEffect(() => {
    if (wishListDltSucc) {
      dispatch(getSubscriberDetails("profile"));
  
    }
  }, [wishListDltSucc]);
  return (
    <>
      <NavBar />

      {/* wishlist */}
      <div className="wishlist">
        <Container>
          {getSubscriberDetails ?
          <>
          <ClearCart/>
          </>:
          <>
           <Row>
            <Col lg={3} sm={12}>
              <div className="wishlist__leftside">
                <AccountSideNav />
              </div>
            </Col>
            <Col lg={9} sm={12} className="whishlist-btn">
              <div className="carttable">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="carttable__heading d-flex align-items-center">
               
                  </div>
                  <div className="carttable__heading d-flex align-items-center">
                    <RiDeleteBinLine className="carttable__heading--deleteicon" />
                    <span
                      className="carttable__heading--selectitem"
                      onClick={handleShow}
                    >
                      <u>Clear Cart</u>
                    </span>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Body>
                        <div className="arrow-left"></div>

                        <div className="cart__modal">
                          <p className="cart__modal--ask">
                            Are you sure you want to clear your wishlists?
                          </p>
                          <Link
                            to=""
                            // to="/clearcart"
                            className="yes-btn"
                            onClick={removeAll}
                          >
                            Yes
                          </Link>

                       

                          <br />
                          <button className="no-btn" onClick={handleClose}>
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
                    {/* <Col lg={1}>Unit</Col> */}
                    <Col lg={3} className="title">
                      Unit Cost
                    </Col>

                    <Col lg={3} style={{ textAlign: "left" }} className="title">
                      Action
                    </Col>
                    <Col lg={2}></Col>
                  </Row>

                  {subscriber &&
                    subscriber.wishlists?.map((data, index) => {
                      return (
                        <Row className="mt-3 mb-3 mapping-row" key={index}>
                          <Col
                            lg={4}
                            className="carttable__maintable--firstdata"
                          >
                            <div
                              className="d-flex align-items-center ms-4"
                              style={{ width: "225px" }}
                            >
                              {/* <InputGroup.Checkbox className="checkbox" /> */}
                              <img src={data.image} alt="" />
                              <div>
                                <p>{data.name}</p>
                                <span>Category:{data.category.name}</span>
                              </div>
                            </div>
                          </Col>
                          {/* <Col lg={1}>
                  <div className="unit">{data.unit}</div>
                </Col> */}
                          <Col lg={3}>
                            <div className="unit-price">
                              <p>Rs.{data.price}</p>
                            </div>
                          </Col>
                          <Col lg={3}>
                            <Link
                              to="/shoppingcart"
                              className="carttable__maintable--crossicon"
                              onClick={() => send(data._id, 1)}
                            >
                              Add to Cart
                            </Link>
                          </Col>

                          <Col
                            lg={2}
                            className="carttable__maintable--deleteicon icon"
                          >
                            <RiDeleteBinLine
                              onClick={() => {
                                removeWishlist(data._id);
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
              {/* <CartTable action="Action" icon={<RiDeleteBinLine />} /> */}
            </Col>
          </Row>
          </>}
         
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default WhishList;
