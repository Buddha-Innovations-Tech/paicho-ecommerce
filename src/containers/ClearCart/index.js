import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import { Link,useLocation } from "react-router-dom";
import Clear from "../../assets/images/clear__cart.png";
import { CgChevronDoubleLeft } from "react-icons/cg";
const ClearCart = () => {
  const location=useLocation();
  return (
    <>
      <section className="clear__cart">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="clear__cart--title">Your {window.location.pathname==="/wishlist"?"WishList":"Cart" }  is Clear...</div>
              <div className="clear__cart--image">
                <img src={Clear} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="carttable__pagination">
          <Link to="/">
            <CgChevronDoubleLeft className="me-2" />
            Continue Shopping
          </Link>
        </div>
      </section>
    </>
  );
};

export default ClearCart;
