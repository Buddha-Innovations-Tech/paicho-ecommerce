import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../containers/Home/index";
import ProductDetail from "../ProductDetail";


const App = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/productdetail" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
