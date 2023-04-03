import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyButton from "../components/UI/MyButton";

import { useAppDispatch, useAppSelector } from "../types/hook";
import { clearItem } from "../redux/slices/cartSlices";
import CartItem from "../components/CartItem";
function Cart() {
  const [inforWindow, setInforWindow] = React.useState("Корзина пуста");
  const dispatch = useAppDispatch();
  const { totalPrice, items } = useAppSelector((state: any) => state.cart);

  function clearOnClick() {
    setInforWindow("Спасибо за заказ");
    dispatch(clearItem());
  }

  return (
    <div>
      <Header></Header>
      <main className="main-basket">
        <h1 className="main-basket__title">Корзина</h1>
        <div className="main-basket__row basket-card">
          {items.length === 0 ? (
            <div className="information-window">{inforWindow}</div>
          ) : (
            items.map((i: any) => {
              return <CartItem item={i}></CartItem>;
            })
          )}
        </div>
        <div className="main-basket__bottom">
          {items.length === 0 ? (
            <div></div>
          ) : (
            <MyButton
              disabled
              onClick={clearOnClick}
              text={"Оформить заказ"}
              st={"buttonTx"}
            ></MyButton>
          )}
          <div className="main-basket__sum">{totalPrice} ₽</div>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default Cart;
