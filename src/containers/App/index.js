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

import IndeginousProduct from "../IndeginousProduct";
import ProcessingProduct from "../ProcessingProduct";
import OrganicVegetables from "../OrganicVegetables";
import PaichoDryFoods from "../PaichoDryFoods";
import KetchupSauce from "../KetchupSauce";
import PaichoPickle from "../PaichoPickle";
import GrainsPulses from "../GrainsPulses";

const App = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route exact path="/orderconfirm" element={<OrderConfirmation />} />
          <Route exact path="/productdetail" element={<ProductDetail />} />
          <Route exact path="/shoppingcart" element={<ShoppingCart />} />
          <Route exact path="/orderhistory" element={<OrderHistory />} />
          <Route exact path="/wishlist" element={<WhishList />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/account" element={<AccountDetail />} />
          <Route exact path="/outofstock" element={<OutOfStock />} />
          <Route exact path="/clearcart" element={<ClearCart />} />
          <Route exact path="/" element={<Home />} />

          {/* Categories */}
          <Route exact path="/ketchupandsauces" element={<KetchupSauce />} />
          <Route exact path="/paichodryfoods" element={<PaichoDryFoods />} />
          <Route exact path="/grainsandpulses" element={<GrainsPulses />} />
          <Route exact path="/paichopickle" element={<PaichoPickle />} />
          <Route
            exact
            path="/indenginousproducts"
            element={<IndeginousProduct />}
          />
          <Route
            exact
            path="/processingproduct"
            element={<ProcessingProduct />}
          />
          <Route
            exact
            path="/organicvegetables"
            element={<OrganicVegetables />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
