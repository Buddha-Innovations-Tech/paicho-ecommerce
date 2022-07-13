import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Moment from "react-moment";

const OrderHistoryComp = ({
  _id,
  shippingInfo,
  orderItems,
  createdAt,
  orderStatus,
  totalPrice,
}) => {
  return (
    <>
      <div className="order__history--background-comp">
        <Row className="orderdaterow">
          <Col md={6}>
            <p className="orderid">Order ID: {_id}</p>
          </Col>
          <Col md={6}>
            <span className="date orderid">Date:<Moment format="DD/MM/YYYY">
                          {createdAt}
                        </Moment>  </span>
            <span className="status orderid">Status : {orderStatus}</span>
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
          {orderItems.map((curElm) => {
            return (
              <>
                <Col md={4}>
                  <p>{curElm.name}</p>
                </Col>
                <Col md={3}>
                  <p>{curElm.qty}</p>
                </Col>
                <Col md={3}>
                  <p>{shippingInfo.fullname}</p>
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
            <p>Rs {totalPrice}</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default OrderHistoryComp;
