import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ProductDetailComp from "../../components/ProductDetail";
import ScrollToTop from "../../components/ScrollToTop";

const ProductDetail = () => {
  return (
    <>
      <ScrollToTop/>
      <NavBar />
      <ProductDetailComp stock="In Stock" />
      <Footer />
    </>
  );
};

export default ProductDetail;
