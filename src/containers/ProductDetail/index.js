import React,{useEffect,useRef} from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ProductDetailComp from "../../components/ProductDetail";

const ProductDetail = () => {
  const scrollRef = useRef(null);
<<<<<<< HEAD
    useEffect(()=>{
      scrollRef.current.scrollIntoView({behaviour:"smooth"});
    },[])
=======
  useEffect(()=>{
    scrollRef.current.scrollIntoView({behaviour:"smooth"});
  },[])
>>>>>>> fb548845de10b4505e3d5461681e824e0710b6de
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
