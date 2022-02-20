import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ProductDetailComp from "../../components/ProductDetail";

const ProductDetail = () => {
  return (
    <>
      <NavBar />
      <ProductDetailComp stock="In Stock" />
      <Footer />
    </>
  );
};

export default ProductDetail;
