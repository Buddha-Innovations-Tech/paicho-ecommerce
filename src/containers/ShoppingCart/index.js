import { Container, Row, Col, Table } from "react-bootstrap";
// import { ImCross } from "react-icons/im";
import { RiDeleteBinLine } from "react-icons/ri";

import { Link } from "react-router-dom";
import React from "react";

import CartTable from "../../components/CartTable.js";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const ShoppingCart = () => {
  return (
    <>
      <NavBar />

      {/* shopping-cart */}
      <Container>
        <Row>
          <Col md={8} sm={12} className="shoppingcart-btn">
            <CartTable icon={<RiDeleteBinLine />} tableheading="Sub Total" />
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
                      <p>Rs.12000</p>
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
                      <p>Rs.12200</p>
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
