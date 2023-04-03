import React from "react";
import MyButton from "../components/UI/MyButton";
// import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../types/hook";

import {
  addItem,
  removeItem,
  clearItem,
  reduceItem,
} from "../redux/slices/cartSlices";
import { Link } from "react-router-dom";
function CartItem({ item }: any) {
  const dispatch = useAppDispatch();
  const { totalPrice, itemsCount, items } = useAppSelector(
    (state: any) => state.cart
  );
  function removeOnClick() {
    dispatch(removeItem(item.id));
  }
  function reduceOnClick() {
    items.forEach((i: any) => {
      if (i.id === item.id) {
        if (i.count === 0) {
          dispatch(removeItem(item.id));
        }
      }
    });
    dispatch(reduceItem(item.id));
  }
  function addOnClick() {
    dispatch(addItem(item));
  }

  return (
    <div className="basket-card__item">
      <div className="basket-card__bloc">
        <div className="basket-card__img">
          <img src={item.imageUrl} alt="" />
        </div>
        <div className="basket-card__body">
          <div className="basket-card__volume">
            {item.sizeType === "кг" || item.sizeType === "г" ? (
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.23" clipPath="url(#clip0_56_1591)">
                  <path
                    d="M13.3035 7.99994C12.7753 7.99994 12.2785 7.71869 12.0097 7.26869L10.0003 3.93743L7.9941 7.26869C7.72222 7.72181 7.22535 8.00306 6.69722 8.00306C6.5566 8.00306 6.41597 7.98431 6.2816 7.94369L2.00035 6.71868V12.2812C2.00035 12.7406 2.31285 13.1406 2.7566 13.2499L9.51285 14.9406C9.8316 15.0187 10.166 15.0187 10.4816 14.9406L17.2441 13.2499C17.6878 13.1374 18.0003 12.7374 18.0003 12.2812V6.71868L13.7191 7.94056C13.5847 7.98119 13.4441 7.99994 13.3035 7.99994ZM19.9472 4.49369L18.3378 1.28118C18.241 1.08743 18.0316 0.974934 17.816 1.00306L10.0003 1.99993L12.866 6.75306C12.9847 6.94993 13.2222 7.04368 13.4441 6.98118L19.6285 5.21556C19.9378 5.12493 20.0878 4.78118 19.9472 4.49369ZM1.66285 1.28118L0.0534711 4.49369C-0.0902789 4.78118 0.0628461 5.12493 0.369096 5.21243L6.55347 6.97806C6.77535 7.04056 7.01285 6.94681 7.1316 6.74993L10.0003 1.99993L2.1816 1.00306C1.96597 0.978059 1.75972 1.08743 1.66285 1.28118Z"
                    fill="#3F4E65"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_56_1591">
                    <rect width="20" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                width="9"
                height="15"
                viewBox="0 0 9 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.23" clipPath="url(#clip0_56_1553)">
                  <path
                    d="M8.1 14.0625C8.05312 14.3164 7.95234 14.5361 7.79766 14.7217C7.64297 14.9072 7.44375 15 7.2 15H1.8C1.55625 15 1.35938 14.9097 1.20938 14.729C1.05937 14.5483 0.95625 14.3262 0.9 14.0625L0 8.4375V6.5625C0 6.2793 0.0914062 6.04492 0.274219 5.85938C0.457031 5.67383 0.726562 5.49072 1.08281 5.31006C1.43906 5.12939 1.65937 5.00977 1.74375 4.95117C2.11875 4.67773 2.45625 4.35547 2.75625 3.98438C3.05625 3.61328 3.27656 3.22266 3.41719 2.8125H3.15C3.02812 2.8125 2.92266 2.76611 2.83359 2.67334C2.74453 2.58057 2.7 2.4707 2.7 2.34375V0.46875C2.7 0.341797 2.74453 0.231934 2.83359 0.13916C2.92266 0.0463867 3.02812 0 3.15 0H5.85C5.97187 0 6.07734 0.0463867 6.16641 0.13916C6.25547 0.231934 6.3 0.341797 6.3 0.46875V2.34375C6.3 2.4707 6.25547 2.58057 6.16641 2.67334C6.07734 2.76611 5.97187 2.8125 5.85 2.8125H5.58281C5.86406 3.60352 6.38437 4.28711 7.14375 4.86328C7.24687 4.95117 7.48125 5.08789 7.84687 5.27344C8.2125 5.45898 8.49609 5.64941 8.69766 5.84473C8.89922 6.04004 9 6.2793 9 6.5625V8.4375L8.1 14.0625Z"
                    fill="#3F4E65"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_56_1553">
                    <rect width="9" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
            {item.sizes} {item.sizeType}
          </div>
          <Link to={`/product/${item.id}`} className="basket-card__name">
            {item.name}
          </Link>
          <div className="basket-card__description">
            {
              // item.description
              item.description.length > 350
                ? item.description.slice(0, 350) + " ..."
                : item.description + " ..."
            }
          </div>
          {/* //// */}
        </div>
      </div>

      <div className="basket-card__counter">
        <button onClick={reduceOnClick} className="basket-card__reduce">
          -
        </button>
        <div className="basket-card__number">{item.count}</div>
        <button onClick={addOnClick} className="basket-card__add">
          +
        </button>
      </div>
      <div className="basket-card__price">{item.price * item.count} ₽</div>
      <div className="basket-card__clear">
        <MyButton onClick={removeOnClick}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.625 6.25H20.3125C20.5197 6.25 20.7184 6.33231 20.8649 6.47882C21.0114 6.62534 21.0938 6.82405 21.0938 7.03125C21.0938 7.23845 21.0114 7.43716 20.8649 7.58368C20.7184 7.73019 20.5197 7.8125 20.3125 7.8125H19.4484L18.2734 18.4C18.1673 19.3555 17.7125 20.2384 16.9961 20.8795C16.2797 21.5207 15.352 21.8751 14.3906 21.875H10.6094C9.64797 21.8751 8.72029 21.5207 8.00389 20.8795C7.28749 20.2384 6.8327 19.3555 6.72656 18.4L5.55 7.8125H4.6875C4.4803 7.8125 4.28159 7.73019 4.13507 7.58368C3.98856 7.43716 3.90625 7.23845 3.90625 7.03125C3.90625 6.82405 3.98856 6.62534 4.13507 6.47882C4.28159 6.33231 4.4803 6.25 4.6875 6.25H9.375C9.375 5.4212 9.70424 4.62634 10.2903 4.04029C10.8763 3.45424 11.6712 3.125 12.5 3.125C13.3288 3.125 14.1237 3.45424 14.7097 4.04029C15.2958 4.62634 15.625 5.4212 15.625 6.25ZM12.5 4.6875C12.0856 4.6875 11.6882 4.85212 11.3951 5.14515C11.1021 5.43817 10.9375 5.8356 10.9375 6.25H14.0625C14.0625 5.8356 13.8979 5.43817 13.6049 5.14515C13.3118 4.85212 12.9144 4.6875 12.5 4.6875ZM10.1562 10.9375V17.1875C10.1562 17.3947 10.2386 17.5934 10.3851 17.7399C10.5316 17.8864 10.7303 17.9688 10.9375 17.9688C11.1447 17.9688 11.3434 17.8864 11.4899 17.7399C11.6364 17.5934 11.7188 17.3947 11.7188 17.1875V10.9375C11.7188 10.7303 11.6364 10.5316 11.4899 10.3851C11.3434 10.2386 11.1447 10.1562 10.9375 10.1562C10.7303 10.1562 10.5316 10.2386 10.3851 10.3851C10.2386 10.5316 10.1562 10.7303 10.1562 10.9375ZM14.0625 10.1562C13.8553 10.1562 13.6566 10.2386 13.5101 10.3851C13.3636 10.5316 13.2812 10.7303 13.2812 10.9375V17.1875C13.2812 17.3947 13.3636 17.5934 13.5101 17.7399C13.6566 17.8864 13.8553 17.9688 14.0625 17.9688C14.2697 17.9688 14.4684 17.8864 14.6149 17.7399C14.7614 17.5934 14.8438 17.3947 14.8438 17.1875V10.9375C14.8438 10.7303 14.7614 10.5316 14.6149 10.3851C14.4684 10.2386 14.2697 10.1562 14.0625 10.1562Z"
              fill="white"
            />
          </svg>
        </MyButton>
      </div>
    </div>
  );
}

export default CartItem;
