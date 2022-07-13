import { Button, Col, Container, Row, Toast } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingAddress } from "../../actions/cartAddedAction";
import { createOrder } from "../../actions/orderAction";
import { BsCheck } from "react-icons/bs";
import { removeAllCart } from "../../actions/cartAddedAction.js";
import { getSubscriberDetails } from "../../actions/subscriberaction";
import {ORDER_CREATE_RESET} from "../../constants/orderConstants";
const Checkout = () => {
  const { shippingAddress } = useSelector((state) => state.cart);
  const { subscriberInfo } = useSelector((state) => state.subscriberLogin);
  const [fullname, setFullName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  // const [phonenumber, setPhoneNumber] = useState(
  //   shippingAddress && shippingAddress.phone
  // );
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const { success: orderCreateSuccess, loading: orderCreateLoading } =
    useSelector((state) => state.orderCreate);
  const [paymentmethod, setPaymentMethod] = useState("Cash on Delivery");
  const { cartItems } = useSelector((state) => state.cart);
  const [checked, setChecked] = useState(true);
  const { subscriber } = useSelector((state) => state.subscriberDetails);
  const dispatch = useDispatch();
  const [showA, setShowA] = useState(false);
  const [show, setShow] = useState(false);
  const [mobileErr, setMobileErr] = useState(false);
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const navigate = useNavigate();
  // const validate = () => {
  //   if (phonenumber.length !== 10) {
  //     setMobileErr(true);
  //     return false;
  //   }
  //   if (
  //     fullname === "" ||
  //     phonenumber === "" ||
  //     email === "" ||
  //     address === ""
  //   ) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (phonenumber.length !== 10) {
      setMobileErr(true);
      return false;
    }
    if (
      fullname === "" ||
      phonenumber === "" ||
      email === "" ||
      address === ""
    ) {
      return false;
    } else {
      dispatch(
        createOrder({
          shippingInfo: {
            fullname,
            address,
            phonenumber,
            email,
          },
          shippingprice: 300,

          orderItems: cartItems.map((i) => {
            return { ...i, product: i.id };
          }),
          paymentInfo: {
            paymentmethod,
          },
        })
        )
    }
  
      
    // setShowA(true);
    // setAddress("");
    // setFullName("");
    // setEmail("");
    // setPhoneNumber("");
  };

  var discountInBill = 0;
  var totalMrp = 0;
  var grandTotal = 0;

  useEffect(() => {
    dispatch(getSubscriberDetails("profile"));
  }, [dispatch]);
  useEffect(() => {
    if (subscriber?.billingadddress) {
      if (!checked) {
        setFullName(subscriber?.billingadddress?.fullname);
        setPhoneNumber(subscriber?.billingadddress?.phonenumber);
        setEmail(subscriber?.billingadddress?.emailaddress);
        setAddress(subscriber?.billingadddress?.billingaddress);
      } else {
        setFullName("");
        setAddress("");
        setEmail("");
        setPhoneNumber("");
      }
    }
  }, [subscriber, checked]);
  useEffect(()=>{
    if (orderCreateSuccess) {
      dispatch({ type: ORDER_CREATE_RESET })
      navigate("/ordercomplete");
      dispatch(removeAllCart());
    }
  },[orderCreateSuccess])
  return (
    <>
      <section className="checkout">
        <NavBar />

        {/* checkout */}
        <div className="checkout__box">
          <Container>
            <div className="checkout__box--heading">
              <span className="checkout__box--heading-title">
                Shipping Address
              </span>
              <div className="d-flex justify-content-between align-items-center">
                <span className="checkout__box--heading-para">
                  Please fill in the form correctly to purchase your order
                </span>
                <span>
                  <div className="d-flex align-items-center">
                    <InputGroup.Checkbox
                      value={checked}
                      onChange={(e) => {
                        setChecked(!checked);
                      }}
                    />
                    <span>Use my details</span>
                  </div>
                </span>
              </div>
            </div>
            <Row>
              <Col md={6}>
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
                        value={phonenumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                      />
                    </Form.Group>
                    {mobileErr && phonenumber.length !== 10 && (
                      <p className="register-error">
                        Mobile number must be of 10 digits.
                      </p>
                    )}
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
                      {/* <div className="form-check">
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
                      </div> */}
                      <div className="form-check">
                        <input
                          defaultChecked
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
                        <Toast
                          onClose={() => setShowA(false)}
                          show={showA}
                          delay={2000}
                          autohide
                        >
                          <Toast.Body>
                            Your order has been success !{" "}
                            <BsCheck className="checkicon" />
                          </Toast.Body>
                        </Toast>
                        Confirm Purchase{" "}
                      </Button>
                    </div>
                  </Form>
                </div>
              </Col>
              <Col md={6} className="billingdetailscheckout">
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
                            discountInBill +=
                              (data.discount / 100) * data.price * data.qty;
                            totalMrp += data.price * data.qty;
                            grandTotal = totalMrp - discountInBill + 0;
                            return (
                              <tr className="center" key={index}>
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
                          <td>{totalMrp}</td>
                        </tr>
                        <tr className="center">
                          <td>
                            <span>Discount</span>
                          </td>
                          <td></td>
                          <td>
                            <span>{discountInBill.toFixed(2)}</span>
                          </td>
                        </tr>
                        <tr className="center">
                          <td>
                            <span>Shipping Charge</span>
                          </td>
                          <td></td>
                          <td>
                            <span>0</span>
                          </td>
                        </tr>
                        <tr className="center total-mrp">
                          <td>
                            <span>Grand Total</span>
                          </td>
                          <td></td>
                          <td>
                            <span>{grandTotal}</span>
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
