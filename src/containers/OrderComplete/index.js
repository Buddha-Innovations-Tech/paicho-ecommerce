import React from "react";
import Ordercomplete from "../../assets/images/orderComplete.png";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import {CgChevronDoubleLeft} from "react-icons/cg";
import { Link } from "react-router-dom";
const OrderComplete = () => {
  return (
    <>
      <NavBar />
      <div className="ordercomplete">
        <img src={Ordercomplete} alt="" />
        <Link to="/" className="mt-2 mb-5">
          <CgChevronDoubleLeft  />
          Continue Shopping
        </Link>
      </div>

      <Footer/>
    </>
  );
};

export default OrderComplete;
