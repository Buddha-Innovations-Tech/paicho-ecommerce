import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../containers/Home/index";
import AccountDetail from "../AccountDetail";
import Checkout from "../Checkout";
import OutOfStock from "../OutOfStocK";
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
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/account" element={<AccountDetail />} />
          <Route exact path="/outofstock" element={<OutOfStock />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
