import { Button, Col, Container, Row } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const Checkout = () => {
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
                  <Form action="">
                    <Form.Group controlId="formGroupName">
                      <Form.Label>
                        Full Name
                        <sup className="asterik">*</sup>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Full Name"
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
                          value="option1"
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
                          value="option2"
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
                          value="option3"
                        />
                        <label
                          className="form-check-label ml-16"
                          htmlFor="gridRadios3"
                        >
                          FonePay
                        </label>
                      </div>
                    </Form.Group>

                    <div className="checkout__box--button d-flex justify-content-end">
                      <Link to="/shoppingcart">
                        <Button className="btn__cancel me-3">Cancel</Button>
                      </Link>
                      <Link to="/orderconfirm">
                        <Button className="btn__confirm" type="submit">
                          Confirm Purchase{" "}
                        </Button>
                      </Link>
                    </div>
                  </Form>
                </div>
              </Col>
              <Col md={6}>
                <div className="billing">
                  <div className="billing__heading d-flex justify-content-between">
                    <span className="title">Billing Details</span>
                    <span className="date">Date : 2022-01-31</span>
                  </div>

                  <div className="billing__table">
                    <Table bordered className="second__table">
                      <tbody>
                        <tr className="bt center">
                          <td>Item</td>
                          <td>Quantity</td>
                          <td>Price</td>
                        </tr>
                        <tr className="center">
                          <td>Mango Pickle </td>
                          <td>1</td>
                          <td>Rs. 150</td>
                        </tr>
                        <tr className="center">
                          <td>Paicho Ketchup hot & Sweet </td>
                          <td>2</td>
                          <td>Rs. 500</td>
                        </tr>
                        <tr className="center">
                          <td>Mango Pickle </td>
                          <td>1</td>
                          <td>Rs. 150</td>
                        </tr>
                        <tr className="no">
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className="no">
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className="no">
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className="no">
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className="no">
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className="no">
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className="no">
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className="no">
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className="no">
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className="no">
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className="no">
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="no">
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className="bb">
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </Table>

                    <div className="billing__table--border mt-16">
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
                    </div>
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
