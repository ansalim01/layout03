import React from "react";
import axios from "axios";
///
import "./scss/app.scss";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Route, Router, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Admin from "./pages/Admin";
import { useAppDispatch, useAppSelector } from "./types/hook";
import { setProductCard } from "./redux/slices/productSlices";
function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  let { productCard } = useAppSelector((state: any) => state.productSlices);

  const dispatch = useAppDispatch();
  const loadUsers = async () => {
    setIsLoading(true);
    if (productCard.length === 0) {
      const resp = await axios.get(
        "https://641c4d981a68dc9e4605ef50.mockapi.io/items?"
      );
      dispatch(setProductCard(resp.data));
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    loadUsers();
  }, [productCard]);
  // React.useEffect(() => {
  //   setIsLoading(true);
  //   if (productCard.length === 0) {
  //     fetch(`https://641c4d981a68dc9e4605ef50.mockapi.io/items?`)
  //       .then((response) => response.json())
  //       .then((result) => {
  //         dispatch(setProductCard(result));
  //         setIsLoading(false);
  //       });
  //   } else {
  //     setIsLoading(false);
  //   }
  // }, [productCard]);

  return (
    <div data-testid="div-app" className="App">
      <div className="wrapper">
        <div className="wrapper__container">
          <Routes>
            <Route index path="/" element={<Home isLoading={isLoading} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
            <Route path={"/product/:id"} element={<Product />}>
              {/* <Route path={":id"} element={<Product />}> */}

              {/* </Route> */}
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
