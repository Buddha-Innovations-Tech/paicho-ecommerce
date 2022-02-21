import { InputGroup, Row, Col, Modal } from "react-bootstrap";
import { CgChevronDoubleLeft } from "react-icons/cg";
import { RiDeleteBinLine } from "react-icons/ri";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Productimage from "../../assets/images/ProductImage.png";
import IncrementDecrement from "../IncrementDecrement";

const CartTable = ({ icon, tableheading, btnnn }) => {
  const mainTableData = [
    {
      img: Productimage,
      productname: "Mango Pickle",
      category: "Paicho pickle",
      unit: 1,
      unitcost: "Rs.150",
    },
    {
      img: Productimage,
      productname: "Mango Pickle",
      category: "Paicho pickle",
      unit: 1,
      unitcost: "Rs.150",
    },
    {
      img: Productimage,
      productname: "Mango Pickle",
      category: "Paicho pickle",
      unit: 1,
      unitcost: "Rs.150",
    },
    {
      img: Productimage,
      productname: "Mango Pickle",
      category: "Paicho pickle",
      unit: 1,
      unitcost: "Rs.150",
    },
    {
      img: Productimage,
      productname: "Mango Pickle",
      category: "Paicho pickle",
      unit: 1,
      unitcost: "Rs.150",
    },
    {
      img: Productimage,
      productname: "Mango Pickle",
      category: "Paicho pickle",
      unit: 1,
      unitcost: "Rs.150",
    },
    {
      img: Productimage,
      productname: "Mango Pickle",
      category: "Paicho pickle",
      unit: 1,
      unitcost: "Rs.150",
    },
  ];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="carttable">
        <div className="d-flex justify-content-between align-items-center">
          <div className="carttable__heading d-flex align-items-center">
            <InputGroup.Checkbox />
            <span className="carttable__heading--selectitem">
              Select All(3 items)
            </span>
          </div>
          <div className="carttable__heading d-flex align-items-center">
            <RiDeleteBinLine className="carttable__heading--deleteicon" />
            <span
              className="carttable__heading--selectitem"
              onClick={handleShow}
            >
              <u>Clear Cart</u>
            </span>
            <Modal show={show} onHide={handleClose}>
              {/* <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
              </Modal.Header> */}
              <Modal.Body>
                <div className="arrow-left"></div>

                <div className="cart__modal">
                  <p className="cart__modal--ask">
                    Are you sure you want to clear your cart?
                  </p>
                  <button className="yes-btn">Yes</button> <br />
                  <button className="no-btn">No</button>
                </div>

                <div className="arrow-right"></div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
        <div className="carttable__maintable">
          <Row className="carttable__maintable--firstrow">
            <Col md={4} style={{ paddingLeft: "60px" }}>
              Item List
            </Col>
            <Col md={1}>Unit</Col>
            <Col md={2}>Quantity</Col>
            <Col md={2}>Unit Cost</Col>
            <Col md={2}>Action</Col>
            <Col md={1}></Col>
          </Row>

          {mainTableData.map((data, index) => {
            return (
              <Row className="mt-3 mb-3 mapping-row">
                <Col md={4} className="carttable__maintable--firstdata">
                  <div
                    className="d-flex align-items-center"
                    style={{ width: "225px" }}
                  >
                    <InputGroup.Checkbox />
                    <img src={data.img} alt="" />
                    <div>
                      <p>{data.productname}</p>
                      <span>Category:{data.category}</span>
                    </div>
                  </div>
                </Col>
                <Col md={1}>{data.unit}</Col>
                <Col md={2}>
                  <IncrementDecrement />
                </Col>
                <Col md={2}>{data.unitcost}</Col>
                {window.location.href.includes("shoppingcart") && (
                  <Col md={2}>Rs 500</Col>
                )}
                {window.location.href.includes("wishlist") && (
                  <Col md={2}>
                    <button className="carttable__maintable--crossicon">
                      Add to Cart
                    </button>
                  </Col>
                )}
                <Col md={1} className="carttable__maintable--deleteicon">
                  {icon}
                </Col>
              </Row>
            );
          })}
        </div>
        <div className="carttable__pagination">
          <Link to="/">
            <CgChevronDoubleLeft className="me-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartTable;
