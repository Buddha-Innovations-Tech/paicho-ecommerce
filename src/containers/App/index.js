import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../containers/Home/index";
import ProductDetail from "../ProductDetail";
import ShoppingCart from "../ShoppingCart";
import WhishList from "../WhishList";


const App = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/productdetail" element={<ProductDetail />} />
          <Route exact path="/shoppingcart" element={<ShoppingCart />} />
          <Route exact path="/whishlist" element={<WhishList />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
