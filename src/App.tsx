import "./scss/app.scss";
import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Admin from "./pages/Admin";
///
import { useAppDispatch, useAppSelector } from "./types/hook";
import axios from "axios";
import { setProductCard } from "./redux/slices/filterSlices";
import "./App.css";

function App() {
  return (
    <div className="App">
      test
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path={"product"}>
          <Route path={":id"} element={<Product />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
