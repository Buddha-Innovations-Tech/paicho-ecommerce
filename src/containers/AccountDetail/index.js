import { Col, Container, Row } from "react-bootstrap";
import BillingAddressForm from "../../components/BillingAdrressForm";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import PersonalInfoForm from "../../components/PersonalInfoForm";

const AccountDetail = () => {
  return (
    <>
      <NavBar />
      <section className="account__details">
        <Container>
          <Row>
            <Col md={2}> sano sidenav</Col>
            <Col md={4}>
              <PersonalInfoForm title="Personal Information" />
            </Col>
            <Col md={4}>
              <BillingAddressForm title="Billing Address" />
            </Col>
            <Col md={2}></Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default AccountDetail;
