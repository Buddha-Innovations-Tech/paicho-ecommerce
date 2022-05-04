import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
const OrderHistoryComp = () => {
  return (
    <>
      <div className="order__history--background-comp">
        <Row className="orderdaterow">
          <Col md={6}>
            <p className="orderid">Order ID: #12345</p>
          </Col>
          <Col md={6}>
            <span className="date orderid">Date: 3/6/2022, 5:30:49 PM </span>
            <span className="status orderid">Status : Not Delivered</span>
          </Col>
        </Row>
        <Row className="orderhistoryTitle">
          <Col md={4}>
            <p>Items Name</p>
          </Col>
          <Col md={3}>
            <p>Quantity</p>
          </Col>
          <Col md={3}>
            <p>Ship To</p>
          </Col>
          <Col md={2}>
            <p>Price</p>
          </Col>
        </Row>

        <Row className="orderhistorydata">
          {orderHistoryList.map((curElm) => {
            return (
              <>
                <Col md={4}>
                  <p>{curElm.item}</p>
                </Col>
                <Col md={3}>
                  <p>{curElm.quantity}</p>
                </Col>
                <Col md={3}>
                  <p>{curElm.Shipto}</p>
                </Col>
                <Col md={2}>
                  <p>{curElm.price}</p>
                </Col>
              </>
            );
          })}
        </Row>
        <Row className="orderhistoryTotal">
          <Col md={4}>
            <p>Total</p>
          </Col>
          <Col md={3}></Col>
          <Col md={3}></Col>
          <Col md={2}>
            <p>Rs 320</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default OrderHistoryComp;
