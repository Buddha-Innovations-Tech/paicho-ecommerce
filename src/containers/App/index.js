import { Routes, Route } from "react-router-dom";
import React from "react";

import OrderConfirmation from "../OrderConfirmation";
import AccountDetail from "../AccountDetail";
import ProductDetail from "../ProductDetail";
import OrderHistory from "../OrderHistory";
import ShoppingCart from "../ShoppingCart";
import OutOfStock from "../OutOfStocK";
import ClearCart from "../ClearCart";
import WhishList from "../WhishList";
import Checkout from "../Checkout";
import Home from "../Home";
import axios from "axios";
import SubCategory from "../SubCategory";
import ProcessingProduct from "../ProcessingProduct";
import OrganicVegetables from "../OrganicVegetables";
import PaichoDryFoods from "../PaichoDryFoods";
import KetchupSauce from "../KetchupSauce";
import PaichoPickle from "../PaichoPickle";
import GrainsPulses from "../GrainsPulses";
import IndeginousProduct from "../IndeginousProduct";
import Search from "../Search";
import OrderComplete from "../OrderComplete";
// import ScrollToTop from "../../components/ScrollToTop";

const App = () => {
  axios.defaults.baseURL = "https://paicho.herokuapp.com/";
  // axios.defaults.baseURL = "http://localhost:5000/";
  return (
    <div>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/orderconfirm" element={<OrderConfirmation />} />
          <Route exact path="/productdetail/:id" element={<ProductDetail />} />
          <Route exact path="/shoppingcart" element={<ShoppingCart />} />
          <Route exact path="/orderhistory" element={<OrderHistory />} />
          <Route exact path="/wishlist" element={<WhishList />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/account" element={<AccountDetail />} />
          <Route exact path="/outofstock" element={<OutOfStock />} />
          <Route exact path="/clearcart" element={<ClearCart />} />
          <Route exact path="/search/:productname" element={<Search />} />
          <Route exact path="/:name" element={<PaichoPickle />} />
          <Route exact path="/ordercomplete" element={<OrderComplete />} />

        </Routes>
      </main>
    </div>
  );
};

export default App;
