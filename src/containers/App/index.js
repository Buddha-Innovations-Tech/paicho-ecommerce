import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../containers/Home/index";
import AccountDetail from "../AccountDetail";
import Checkout from "../Checkout";
import OutOfStock from "../OutOfStocK";
import GrainsPulses from "../GrainsPulses";
import IndeginousProduct from "../IndeginousProduct";
import KetchupSauce from "../KetchupSauce";
import PaichoDryFoods from "../PaichoDryFoods";
import PaichoPickle from "../PaichoPickle";
import ProcessingProduct from "../ProcessingProduct";
import ProductDetail from "../ProductDetail";
import ShoppingCart from "../ShoppingCart";
import WhishList from "../WhishList";
import OrganicVegetables from "../OrganicVegetables";

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
          <Route exact path="/account" element={<AccountDetail />} />
          <Route exact path="/wishlist" element={<WhishList />} />
          <Route exact path="/checkout" element={<Checkout />} />

          {/* Categories */}
          <Route exact path="/paichopickle" element={<PaichoPickle />} />
          <Route exact path="/grainsandpulses" element={<GrainsPulses />} />
          <Route
            exact
            path="/indenginousproducts"
            element={<IndeginousProduct />}
          />
          <Route exact path="/ketchupandsauces" element={<KetchupSauce />} />
          <Route exact path="/paichodryfoods" element={<PaichoDryFoods />} />
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
