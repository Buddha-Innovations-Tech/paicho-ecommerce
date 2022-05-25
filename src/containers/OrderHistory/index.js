import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect } from "react";
import AccountSideNav from "../../components/AccoountSideNav";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { listOrderHistory } from "../../actions/orderAction";
import OrderHistoryComp from "../../components/OrderHistoryComp";

const orderHistoryList = [
  {
    item: "Lemon Pickle",
    quantity: 2,
    Shipto: "Esta Kunwar",
    price: "120",
  },
  {
    item: "Mango Pickle",
    quantity: 2,
    Shipto: "Esta Kunwar",
    price: "120",
  },
  {
    item: "Gooseberry Jam",
    quantity: 2,
    Shipto: "Esta Kunwar",
    price: "120",
  },
];
const OrderHistory = () => {
  const { ORDER } = useSelector((state) => state.orderList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrderHistory());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <section className="order__history">
        <Container>
          <Row>
            <Col lg={3} sm={12}>
              <div className="sidenav">
                <AccountSideNav />
              </div>
            </Col>
            <Col lg={8} sm={12} style={{ marginTop: "70px" }}>
              <div className="order__history--background">
                {ORDER &&
                  ORDER.map((curElm) => {
                    return (
                      <div className="mt-2">
                        <OrderHistoryComp {...curElm} />
                      </div>
                    );
                  })}

                {/* <div className="mt-4">
                  <OrderHistoryComp />
                </div>
                <div className="mt-4">
                  <OrderHistoryComp />
                </div> */}
              </div>
              {/* <div className="order__history--title">
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
                    <Col lg={2}>
                      <div className="date">2022-01-24</div>
                    </Col>
                    <Col lg={2}>
                      <div className="shipto">Esta Kunwar</div>
                    </Col>
                    <Col lg={1} className="deliver">
                      <div className="status">Delivered</div>
                    </Col>
                    <Col lg={2}>
                      <div className="price">Rs. 1500</div>
                    </Col>
                    <Col lg={2} className="cancel">
                      <div className="action">Cancel Order</div>
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
                    <Col lg={2}>
                      <div className="date">2022-01-24</div>
                    </Col>
                    <Col lg={2}>
                      <div className="shipto">Esta Kunwar</div>
                    </Col>
                    <Col lg={1} className="cancel">
                      <div className="status">Cancelled</div>
                    </Col>
                    <Col lg={2}>
                      <div className="price">Rs. 1500</div>
                    </Col>
                    <Col lg={2} className="reorder">
                      <div className="action">Re Order</div>
                    </Col>
                  </Row>
                </div>
              </div> */}
            </Col>
            <Col lg={2}></Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default OrderHistory;
