import React from "react";

///
import "./scss/app.scss";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Route, Router, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Admin from "./pages/Admin";
import { useAppDispatch, useAppSelector } from "./types/hook";
import axios from "axios";
import { setProductCard } from "./redux/slices/filterSlices";
function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  let { productCard } = useAppSelector((state: any) => state.filters);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    setIsLoading(true);
    console.log(productCard);
    if (productCard.length === 0) {
      axios
        .get(`https://641c4d981a68dc9e4605ef50.mockapi.io/items?`)
        .then((res) => {
          dispatch(setProductCard(res.data));
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="wrapper__container _container">
          <Routes>
            <Route index path="/" element={<Home isLoading={isLoading} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
            <Route path={"/product"}>
              <Route path={":id"} element={<Product />}></Route>
            </Route>
          </Routes>
        </div>
      </div>
    </div>
    // <div className="App">

    // </div>
  );
}

export default App;
