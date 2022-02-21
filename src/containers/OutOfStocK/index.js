import React from "react";

import ProductDetailComp from "../../components/ProductDetail";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const OutOfStock = () => {
  return (
    <>
      <NavBar />
      <div className="outofstock-page">
        <ProductDetailComp stock="Out Of Stock" />
      </div>
      <Footer />
    </>
  );
};

export default OutOfStock;
