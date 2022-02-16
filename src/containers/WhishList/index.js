import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import CartTable from '../../components/CartTable.js'
import AccountSideNav from '../../components/AccoountSideNav'
import {RiDeleteBinLine} from "react-icons/ri"


const WhishList = () => {
  return (
    <>
      <NavBar />
      <div className="wishlist">
      <Container>
        <Row>
          <Col md={3} sm={12}>
            <div className="wishlist__leftside">
            <AccountSideNav/>
            </div>
          </Col>
          <Col md={9} sm={12} className="whishlist-btn">
            <CartTable tableheading="Action" icon={<RiDeleteBinLine/>}/>

          </Col>
        </Row>
      </Container>
      </div>
      <Footer />
    </>
  )
}

export default WhishList