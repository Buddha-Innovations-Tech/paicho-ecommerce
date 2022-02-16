import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import CartTable from "../../components/CartTable.js";
import { Container, Row, Col, Table } from "react-bootstrap";
import {ImCross} from "react-icons/im"

const ShoppingCart = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col md={8} sm={12} className="shoppingcart-btn">
            <CartTable icon={<ImCross/>} tableheading="Sub Total"/>

          </Col>
          <Col md={4} sm={12}>
            <div className="shopcartrightbox">
              <Table>
                <tbody>
                  <tr>
                    <td className="shopcartrightbox__heading">Order Summary</td>
                  </tr>

                  <tr>
                    <div className="d-flex justify-content-between align-items-center shopcartrightbox__content">
                      <p>Total M.R.P</p>
                      <p>Rs.12000</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center shopcartrightbox__content">
                      <p>Shipping</p>
                      <p>Rs.200</p>
                    </div>
                  </tr>
                  <tr>
                    <div className="d-flex justify-content-between align-items-center shopcartrightbox__total">
                      <p>Grand Total</p>
                      <p>Rs.12200</p>
                    </div>
                    <div className="shopcartrightbox__divbtn">
                    <button className="shopcartrightbox__divbtn--buttonn">Checkout</button>
                    </div>
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
