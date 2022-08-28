import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ProductDetailComp from "../../components/ProductDetail";
import ScrollToTop from "../../components/ScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { product, success } = useSelector((state) => state.productDetails);
  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch,id]);
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <ProductDetailComp stock="In Stock" product={product} success={success} />
      <Footer />
    </>
  );
};

export default ProductDetail;
