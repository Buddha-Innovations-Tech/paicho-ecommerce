import { Col, Container, Row } from "react-bootstrap";
import { CgChevronDoubleRight } from "react-icons/cg";
import { Link } from "react-router-dom";

import Order from "../../assets/images/order__confirm.png";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const OrderConfirmation = () => {
  return (
    <>
      <NavBar />
      <section className="order__confirm">
        <Container>
          <Row>
            <Col md={6}>
              <div className="order__confirm--left">
                <div className="order__confirm--left-text">
                  <span className="greeting">Hey, Estaa Kunwar </span>
                  <p className="my-14">Your Order is Complete !</p>
                  <span className="content">
                    You will be receiving a confirmation email/ code <br /> with
                    order details
                  </span>
                </div>
                <div className="order__confirm--left-shopmore">
                  <span>Happy Shopping ! </span>
                  <div>
                    <Link to="/">
                      Shop More
                      <CgChevronDoubleRight className="me-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="order__confirm--right">
                <img src={Order} alt="order" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default OrderConfirmation;
