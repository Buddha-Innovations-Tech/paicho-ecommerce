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
import PaichoPickle from "../PaichoPickle";
import Search from "../Search";
import { Helmet } from "react-helmet";
// import ScrollToTop from "../../components/ScrollToTop";

const App = () => {
  axios.defaults.baseURL = "https://paicho.herokuapp.com/";
  // axios.defaults.baseURL = "http://localhost:5000/";
  return (
    <div>
      <main>
        <Helmet>
          <title>Paicho E-commerce</title>
          <meta name="description" content="Buy your favourite foods & ingredients from Paicho"/>
          <meta name="keywords" content="paicho product,organic food in nepal,vegetable supplier in nepal,organic vegetables near me,organic vegetables delivery,fresh vegetables near me,organic food near me,millet in nepal,organic vegetables and fruits near me,organic vegetables shop,organic vegetables suppliers,why organic vegetables are better,organic vegetables benefits,organic vegetables store,fresh vegetable delivery service,pahadi tarkari,organic product in nepal,best organic product,organic pickle,nepali farmer,nepal farm,vegetable supplier,fresh vegetable in nepal,fresh vegetable delivery service,best pickle in nepal,best achar in nepal"/>
        </Helmet>
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

        </Routes>
      </main>
    </div>
  );
};

export default App;
