import { Col, Container, Row } from 'react-bootstrap';
import { CgChevronDoubleRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import React from 'react';
import Order from '../../assets/Images/order__confirm.png';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import { Helmet } from 'react-helmet';

const OrderConfirmation = () => {
  const { subscriberInfo } = useSelector((state) => state.subscriberLogin);

  return (
    <>
      <ScrollToTop />
      <Helmet>
        <title>Paicho-Order Confirm</title>
      </Helmet>
      <ScrollToTop />
      <NavBar />
      <section className='order__confirm'>
        <Container>
          <Row>
            <Col md={6}>
              <div className='order__confirm--left'>
                <div className='order__confirm--left-text mt-4'>
                  {subscriberInfo ? (
                    <>
                      <span className='greeting'>
                        Hey,{' '}
                        {`${subscriberInfo.firstname} ${subscriberInfo.lastname}`}
                      </span>
                    </>
                  ) : (
                    ''
                  )}
                  <p className='my-14'>Your Order is Complete !</p>
                  {/* <span className="content">
                    You will be receiving a confirmation email/ code <br /> with
                    order details
                  </span> */}
                </div>
                <div className='order__confirm--left-shopmore'>
                  <span>Happy Shopping ! </span>
                  <div className='mt-2'>
                    <Link to='/'>
                      Shop More
                      <CgChevronDoubleRight className='me-2' />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className='order__confirm--right'>
                <img src={Order} alt='order' className='img-fluid' />
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
