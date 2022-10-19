import React, { useState } from 'react';
import { InputGroup, Row, Col, Modal } from 'react-bootstrap';
import { CgChevronDoubleLeft } from 'react-icons/cg';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Productimage from '../../assets/Images/ProductImage.png';
import IncrementDecrement from '../IncrementDecrement';
const CartTable = ({ icon, tableheading, btnnn, action, cartprop }) => {
  const mainTableData = [
    {
      img: Productimage,
      productname: 'Mango Pickle',
      category: 'Paicho pickle',
      unit: '1 kg',
      unitcost: 'Rs.150',
    },
    {
      img: Productimage,
      productname: 'Mango Pickle',
      category: 'Paicho pickle',
      unit: '1 kg',
      unitcost: 'Rs.150',
    },
    {
      img: Productimage,
      productname: 'Mango Pickle',
      category: 'Paicho pickle',
      unit: '1 kg',
      unitcost: 'Rs.150',
    },
    {
      img: Productimage,
      productname: 'Mango Pickle',
      category: 'Paicho pickle',
      unit: '1 kg',
      unitcost: 'Rs.150',
    },
    {
      img: Productimage,
      productname: 'Mango Pickle',
      category: 'Paicho pickle',
      unit: '1 kg',
      unitcost: 'Rs.150',
    },
    {
      img: Productimage,
      productname: 'Mango Pickle',
      category: 'Paicho pickle',
      unit: '1 kg',
      unitcost: 'Rs.150',
    },
    {
      img: Productimage,
      productname: 'Mango Pickle',
      category: 'Paicho pickle',
      unit: '1 kg',
      unitcost: 'Rs.150',
    },
  ];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [clearCart, setClearCart] = useState(mainTableData);
  const goToShoppingcartPage = () => {
    window.location.href.includes('/clearcart');
  };
  const cartClear = () => {
    setClearCart([]);
  };
  return (
    <>
      <div className='carttable'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='carttable__heading d-flex align-items-center'>
            <InputGroup.Checkbox />
            <span className='carttable__heading--selectitem'>
              Select All(3 items)
            </span>
          </div>
          <div className='carttable__heading d-flex align-items-center'>
            <RiDeleteBinLine className='carttable__heading--deleteicon' />
            <span
              className='carttable__heading--selectitem'
              onClick={handleShow}
            >
              <u>Clear Cart</u>
            </span>
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                <div className='arrow-left'></div>

                <div className='cart__modal'>
                  <p className='cart__modal--ask'>
                    Are you sure you want to clear your cart?
                  </p>
                  <Link
                    to=''
                    // to="/clearcart"
                    className='yes-btn'
                    onClick={cartClear}
                  >
                    Yes
                  </Link>
                  {clearCart === 0 ? (
                    <>
                      <h1>Your Cart has been Cleared.</h1>
                    </>
                  ) : (
                    ''
                  )}
                  <br />
                  <button className='no-btn' onClick={handleClose}>
                    No
                  </button>
                </div>

                <div className='arrow-right'></div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
        <div className='carttable__maintable'>
          <Row className='carttable__maintable--firstrow'>
            <Col lg={4} style={{ paddingLeft: '60px' }} className='title'>
              Item List
            </Col>
            {/* <Col lg={1}>Unit</Col> */}
            <Col lg={2}>Quantity</Col>
            <Col lg={2}>Unit Cost</Col>
            <Col lg={2}>Subtotal</Col>
            <Col lg={2}>{action}</Col>
          </Row>

          {cartprop.length &&
            cartprop.map((data, index) => {
              return (
                <Row className='mt-3 mb-3 mapping-row' key={index}>
                  <Col lg={4} className='carttable__maintable--firstdata'>
                    <div
                      className='d-flex align-items-center'
                      style={{ width: '225px' }}
                    >
                      <InputGroup.Checkbox className='checkbox' />
                      <img src={data.img} alt='' />
                      <div>
                        <p>{data.product}</p>
                        <span>Category:{data.categories.name}</span>
                      </div>
                    </div>
                  </Col>
                  {/* <Col lg={1}>
                  <div className="unit">{data.unit}</div>
                </Col> */}
                  <Col lg={2}>
                    <div className='inc__dec'>
                      <IncrementDecrement />
                    </div>
                  </Col>
                  <Col lg={2}>
                    <div className='unit'>{data.unitcost}</div>
                  </Col>
                  {window.location.href.includes('shoppingcart') && (
                    <Col lg={2}>
                      <div className='total'>Rs 500</div>
                    </Col>
                  )}
                  {window.location.href.includes('wishlist') && (
                    <Col lg={2}>
                      <button className='carttable__maintable--crossicon'>
                        Add to Cart
                      </button>
                    </Col>
                  )}
                  <Col lg={2} className='carttable__maintable--deleteicon icon'>
                    {icon}
                  </Col>
                </Row>
              );
            })}
        </div>
        <div className='carttable__pagination'>
          <Link to='/'>
            <CgChevronDoubleLeft className='me-2' />
            Continue Shopping
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartTable;
