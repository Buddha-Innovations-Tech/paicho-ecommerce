import { Button, Col, Container, Row } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingAddress } from "../../actions/cartAddedAction";
import { createOrder } from "../../actions/orderAction";
const Checkout = () => {
  const { shippingAddress } = useSelector((state) => state.cart);
  const [fullname, setFullName] = useState(shippingAddress.fullname);
  const [phone, setPhone] = useState(shippingAddress.phone);
  const [email, setEmail] = useState(shippingAddress.email);
  const [address, setAddress] = useState(shippingAddress.address);
  const [paymentmethod, setPaymentMethod] = useState("Cash on Delivery");
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullname, phone, email, address, paymentmethod })
    );
    dispatch(
      createOrder()
      // ({
      //   totalPrice: 2500,
      //   shippingInfo: {
      //     fullname: "abcd",
      //     address: "abcd",
      //     phonenumber: "5422",
      //     email: "xyz@gmail.com",
      //   },
      //   paymentInfo: "cash on delivery",
      //   itemsPrice: cartItems.price,
      //   shippingPrice: 1000,
      //   totalPrice: 120,
      //   orderStatus: "Delivered",
      //   paidAt: Date.now(),
      // })
    );
    setAddress("");
    setFullName("");
    setEmail("");
    setPhone("");
  };
  var discountInBill = 0;
  var totalMrp = 0;
  return (
    <>
      <section className="checkout">
        <NavBar />

        {/* checkout */}
        <div className="checkout__box">
          <Container>
            <Row>
              <Col md={6}>
                <div className="checkout__box--heading">
                  <span className="checkout__box--heading-title">
                    Billing Address
                  </span>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="checkout__box--heading-para">
                      Please fill in the form correctly to purchase your order
                    </span>
                    <span>
                      <div className="d-flex align-items-center">
                        <InputGroup.Checkbox />
                        <span>Use my details</span>
                      </div>
                    </span>
                  </div>
                </div>

                <div className="checkout__box--form">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formGroupName">
                      <Form.Label>
                        Full Name
                        <sup className="asterik">*</sup>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Full Name"
                        value={fullname}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formGroupPhone">
                      <Form.Label>
                        Phone No
                        <sup className="asterik">*</sup>
                      </Form.Label>

                      <Form.Control
                        type="number"
                        placeholder="Phone no"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label>
                        Email address
                        <sup className="asterik">*</sup>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="xyz@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formGroupAddress">
                      <Form.Label>
                        Preffered Address
                        <sup className="asterik">*</sup>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group
                      controlId="formGroupPayment"
                      className="payment"
                    >
                      <label className="form-check-label title">
                        How would you like to order this item ?
                      </label>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="mobile"
                          value="Mobile Banking"
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <label
                          className="form-check-label ml-16"
                          htmlFor="gridRadios1"
                        >
                          Mobile Banking
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="esewa"
                          value="Esewa"
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <label
                          className="form-check-label ml-16"
                          htmlFor="gridRadios2"
                        >
                          Esewa
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="fonepay"
                          value="Fonepay"
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <label
                          className="form-check-label ml-16"
                          htmlFor="gridRadios3"
                        >
                          FonePay
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="Cash"
                          value="Cash on Delivery"
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <label
                          className="form-check-label ml-16"
                          htmlFor="gridRadios1"
                        >
                          Cash On Delivery
                        </label>
                      </div>
                    </Form.Group>

                    <div className="checkout__box--button d-flex justify-content-end">
                      <Link to="/shoppingcart" className="btn__cancel me-3">
                        Cancel
                      </Link>

                      <Button className="btn__confirm" type="submit">
                        Confirm Purchase{" "}
                      </Button>
                    </div>
                  </Form>
                </div>
              </Col>
              <Col md={6}>
                <div className="billing">
                  <div className="billing__heading d-flex justify-content-between">
                    <span className="title">Billing Details</span>
                    <span className="date">Date : {date}</span>
                  </div>

                  <div className="billing__table">
                    <Table bordered className="second__table">
                      <tbody>
                        <tr className="bt center">
                          <td>Item</td>
                          <td>Quantity</td>
                          <td>Price</td>
                        </tr>

                        {cartItems.length > 0 &&
                          cartItems?.map((data, index) => {
                            // discountInBill +=
                            //   (data.discount / 100) * data.price + data.qty;
                            totalMrp += data.price;
                            return (
                              <tr className="center">
                                <td>{data.name} </td>
                                <td>{data.qty}</td>
                                <td>{data.price * data.qty}</td>
                              </tr>
                            );
                          })}

                        <tr className="center total-mrp">
                          <td>
                            <span>Total M.R.P.</span>{" "}
                          </td>
                          <td></td>
                          <td>Rs.{totalMrp}</td>
                        </tr>
                        <tr className="center">
                          <td>
                            <span>Discount</span>
                          </td>
                          <td></td>
                          <td>
                            <span>{discountInBill}</span>
                          </td>
                        </tr>
                        <tr className="center">
                          <td>
                            <span>Shipping Charge</span>
                          </td>
                          <td></td>
                          <td>
                            <span>150</span>
                          </td>
                        </tr>
                        <tr className="center total-mrp">
                          <td>
                            <span>Grand Total</span>
                          </td>
                          <td></td>
                          <td>
                            <span>1500</span>
                          </td>
                        </tr>
                      </tbody>
                    </Table>

                    {/* <div className="billing__table--border mt-16">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>Total M.R.P.</span>
                        <span>4330</span>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <span>Discount</span>
                        <span>150</span>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <span>Delivery Charge</span>
                        <span>50</span>
                      </div>
                    </div>

                    <div className="billing__table--border">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>Grand Total</span>
                        <span>4230</span>
                      </div>
                    </div> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default Checkout;
