import {
  Col,
  Container,
  Row,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import AccountSideNav from "../../components/AccoountSideNav";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";
import {
  getSubscriberDetails,
  updateSubscriber,
  updateBillingAddress,
} from "../../actions/subscriberaction";

const AccountDetail = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [mobilenumber, setMobileNumber] = useState(null);
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [emailaddress, setEmailAddress] = useState("");
  const [billingaddress, setBillingAddress] = useState("");
  const [fullname, setFullName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { subscriber } = useSelector((state) => state.subscriberDetails);
  const { subscriberInfo } = useSelector((state) => state.subscriberLogin);
  const { success: billingupdateSuccess } = useSelector(
    (state) => state.billingAddressUpdate
  );

  const { success } = useSelector((state) => state.subscriberUpdate);
  const updateProfile = (e) => {
    e.preventDefault();
    dispatch(
      updateSubscriber({
        subscriber: subscriber._id,
        firstname,
        lastname,
        email,
        mobilenumber,
      })
    );
  };

  const updateBillingAddres = (e) => {
    e.preventDefault();
    dispatch(
      updateBillingAddress({
        billingaddress: {
          fullname,
          emailaddress,
          phonenumber,
          billingaddress,
        },
      })
    );
  };

  useEffect(() => {
    if (!subscriberInfo) {
      navigate("/");
    } else {
      if (!subscriber?.firstname) {
        dispatch(getSubscriberDetails("profile"));
      } else {
        setFirstName(subscriber.firstname.toString());
        setMobileNumber(subscriber.mobilenumber);
        setLastName(subscriber.lastname.toString());
        setEmail(subscriber.email);
      }
    }
  }, [dispatch, navigate, subscriber]);
  useEffect(() => {
    if (billingupdateSuccess) {
      dispatch(getSubscriberDetails("profile"));
    }
  }, [billingupdateSuccess]);
  useEffect(() => {
    if (
      subscriber?.billingadddress &&
      subscriber?.billingadddress === undefined
    ) {
      setFullName("");
      setPhoneNumber("");
      setEmailAddress("");
      setBillingAddress("");
    } else {
      setFullName(subscriber?.billingadddress?.fullname);
      setPhoneNumber(subscriber?.billingadddress?.phonenumber);
      setEmailAddress(subscriber?.billingadddress?.emailaddress);
      setBillingAddress(subscriber?.billingadddress?.billingaddress);
    }
  }, [subscriber]);

  return (
    <>
      <NavBar />

      {/* account details */}
      <section className="account__details">
        <Container>
          <Row>
            <Col lg={3} sm={12}>
              <AccountSideNav />
            </Col>
            <Col lg={4} sm={12}>
              <div className="form">
                <Form onSubmit={updateProfile}>
                  <div className="d-flex justify-content-between mb-27">
                    <span className="form__title">Personal Information</span>
                    {/* <span className="form__edit">Edit</span> */}
                  </div>
                  <Form.Label>First Name</Form.Label>
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="Enter Your First Name"
                      name="fullname"
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </InputGroup>
                  <Form.Label>Last Name</Form.Label>

                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="Enter Your Last Name"
                      name="lastname"
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </InputGroup>
                  <Form.Label>Mobile Number</Form.Label>

                  <InputGroup>
                    <FormControl
                      label="Mobile Number"
                      type="number"
                      placeholder="Enter Your Mobile Number"
                      name="phone"
                      value={mobilenumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required
                    />
                  </InputGroup>
                  <Form.Label>Email</Form.Label>

                  <InputGroup>
                    <FormControl
                      type="email"
                      placeholder="Enter Your Email Address"
                      name="mobilenumber"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </InputGroup>

                  <Button className="btn__confirm" type="submit">
                    Save Changes
                  </Button>
                </Form>
              </div>{" "}
            </Col>
            <Col lg={4} sm={12}>
              <div className="form">
                <Form>
                  <div className="d-flex justify-content-between mb-27">
                    <span className="form__title">Billing Address</span>
                    {/* <span className="form__edit">Edit</span> */}
                  </div>
                  <Form.Label>Full Name</Form.Label>
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="Enter Your Full Name"
                      name="fullname"
                      value={fullname}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </InputGroup>
                  <Form.Label>Mobile Number</Form.Label>
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="Enter Your Moile Number"
                      name="fullname"
                      value={phonenumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </InputGroup>

                  <Form.Label>Email Address</Form.Label>
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="Enter Your Email Address"
                      name="email"
                      value={emailaddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      required
                    />
                  </InputGroup>

                  <Form.Label>Billing Address</Form.Label>
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="Enter Your Billing Address"
                      name="billing"
                      value={billingaddress}
                      onChange={(e) => setBillingAddress(e.target.value)}
                      required
                    />
                  </InputGroup>

                  <Button
                    className="btn__confirm"
                    onClick={updateBillingAddres}
                  >
                    Save Changes
                  </Button>
                </Form>
              </div>
            </Col>
            <Col lg={1} sm={12}></Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default AccountDetail;
