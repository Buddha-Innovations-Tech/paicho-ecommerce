import React,{useEffect,useRef} from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ProductDetailComp from "../../components/ProductDetail";

const ProductDetail = () => {
  const scrollRef = useRef(null);
  useEffect(()=>{
    scrollRef.current.scrollIntoView({behaviour:"smooth"});
  },[])
  return (
    <>
      <div ref={scrollRef}></div>
      <NavBar />
      <ProductDetailComp stock="In Stock" />
      <Footer />
    </>
  );
};

export default ProductDetail;
