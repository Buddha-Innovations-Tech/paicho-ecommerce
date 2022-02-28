import { Container, Row, Col } from "react-bootstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import React from "react";

import AccountSideNav from "../../components/AccoountSideNav";
import CartTable from "../../components/CartTable.js";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const WhishList = () => {
  return (
    <>
      <NavBar />

      {/* wishlist */}
      <div className="wishlist">
        <Container>
          <Row>
            <Col lg={3} sm={12}>
              <div className="wishlist__leftside">
                <AccountSideNav />
              </div>
            </Col>
            <Col lg={9} sm={12} className="whishlist-btn">
              <CartTable action="Action" icon={<RiDeleteBinLine />} />
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default WhishList;
