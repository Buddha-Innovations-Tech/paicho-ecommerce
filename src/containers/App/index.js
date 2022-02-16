import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../containers/Home/index";
import AccountDetail from "../AccountDetail";
import Checkout from "../Checkout";
import ProductDetail from "../ProductDetail";

const App = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/productdetail" element={<ProductDetail />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/account" element={<AccountDetail />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
