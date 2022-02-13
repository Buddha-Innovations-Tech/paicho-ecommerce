import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../containers/Home/index";

const App = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
