import React  from "react";

import ProductDetailComp from "../../components/ProductDetail";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import ScrollToTop from "../../components/ScrollToTop";

const OutOfStock = () => {
  return (
    <>
     <ScrollToTop/>
      <NavBar />
      <div className="outofstock-page">
        <ProductDetailComp stock="Out Of Stock" />
      </div>
      <Footer />
    </>
  );
};

export default OutOfStock;
