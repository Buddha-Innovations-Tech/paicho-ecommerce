import { Container, Row, Col } from "react-bootstrap";

import AccountSideNav from "../../components/AccoountSideNav";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

import Productimage from "../../assets/images/ProductImage.png";

const OrderHistory = () => {
  return (
    <>
      <NavBar />
      <section className="order__history">
        <Container>
          <Row>
            <Col lg={3} sm={12}>
              <AccountSideNav />
            </Col>
            <Col lg={9} sm={12}>
              <div className="order__history--title">
                <div className="box">
                  <span className="heading">My Order History </span>
                </div>
                <div className="order__history--table">
                  <Row className="hide">
                    <Col lg={3} style={{ paddingLeft: "60px" }}>
                      Item Name
                    </Col>
                    <Col lg={2}>Date</Col>
                    <Col lg={2}>Ship to </Col>
                    <Col lg={1}>Status</Col>
                    <Col lg={2}>Total Price</Col>
                    <Col lg={2}>Action</Col>
                  </Row>
                  <Row className="mx-30">
                    <Col lg={3} className="order__history--table-data">
                      <div
                        className="d-flex align-items-center"
                        style={{ width: "225px" }}
                      >
                        <img src={Productimage} alt="" />
                        <div>
                          <p>Mango Pickle</p>
                          <span>Category: Paicho Pickle</span>
                        </div>
                      </div>
                    </Col>
                    <Col lg={2}>2022-01-24 </Col>
                    <Col lg={2}>Esta Kunwar </Col>
                    <Col lg={1} className="deliver">
                      Delivered
                    </Col>
                    <Col lg={2}>Rs. 1500</Col>
                    <Col lg={2} className="cancel">
                      Cancel Order
                    </Col>
                  </Row>
                  <Row className="mx-30">
                    <Col lg={3} className="order__history--table-data">
                      <div
                        className="d-flex align-items-center"
                        style={{ width: "225px" }}
                      >
                        <img src={Productimage} alt="" />
                        <div>
                          <p>Mango Pickle</p>
                          <span>Category: Paicho Pickle</span>
                        </div>
                      </div>
                    </Col>
                    <Col lg={2}>2022-01-24 </Col>
                    <Col lg={2}>Esta Kunwar </Col>
                    <Col lg={1} className="cancel">
                      Cancelled
                    </Col>
                    <Col lg={2}>Rs. 1500</Col>
                    <Col lg={2} className="reorder">
                      Re Order
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default OrderHistory;
