import { Col, Container, Row } from "react-bootstrap";
import React from "react";

import BillingAddressForm from "../../components/BillingAdrressForm";
import PersonalInfoForm from "../../components/PersonalInfoForm";
import AccountSideNav from "../../components/AccoountSideNav";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const AccountDetail = () => {
  return (
    <>
      <NavBar />

      {/* account details */}
      <section className="account__details">
        <Container>
          <Row>
            <Col md={3} sm={12}>
              <AccountSideNav />
            </Col>
            <Col md={4} sm={12}>
              <PersonalInfoForm title="Personal Information" />
            </Col>
            <Col md={4} sm={12}>
              <BillingAddressForm title="Billing Address" />
            </Col>
            <Col md={1} sm={12}></Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default AccountDetail;
