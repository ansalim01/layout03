import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import MyButton from "../components/UI/MyButton";
import { useAppDispatch, useAppSelector } from "../types/hook";
import { addItem, removeItem, reduceItem } from "../redux/slices/cartSlices";

function Product() {
  const { id } = useParams();
  const [productItem, setProductItem]: any = React.useState({});
  let { productCard } = useAppSelector((state: any) => state.productSlices);
  React.useEffect(() => {
    let results = productCard.filter((item: any) => item.id === Number(id));
    console.log(productCard);
    setProductItem(results[0]);
  }, [id]);

  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state: any) => state.cart);

  function reduceOnClick() {
    items.forEach((i: any) => {
      if (i.id === productItem.id) {
        if (i.count === 0) {
          dispatch(removeItem(productItem.id));
        }
      }
    });
    dispatch(reduceItem(productItem.id));
  }
  function addOnClick() {
    dispatch(addItem(productItem));
  }
  let counter = 0;
  items.forEach((i: any) => {
    if (i.id === productItem.id) {
      counter = i.count;
    }
  });
  return (
    <div>
      <Header
        crumbs={productItem.name}
        crumLink={`/product/${productItem.id}`}
      ></Header>
      <main data-testid="test" className="main">
        <div className="main__container _container">
          <div className="main-product-item">
            <div className="main-product-item__img">
              <img src={productItem.imageUrl} alt="" />
            </div>
            <div className="main-product-item__body">
              <div className="main-product-item__status">В наличии</div>
              <div className="main-product-item__name">{productItem.name}</div>
              <div className="main-product-item__volume">
                {productItem.sizeType === "мл" ||
                productItem.sizeType === "л" ? (
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
                ) : (
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
                )}
                {productItem.sizes} {productItem.sizeType}
              </div>
              <div className="main-product-item__line">
                <div className="main-product-item__price">
                  {productItem.price} ₽
                </div>
                <div className="main-product-item__counter">
                  <button
                    className="main-product-item__reduce"
                    onClick={reduceOnClick}
                  >
                    -
                  </button>
                  <div className="main-product-item__number">{counter}</div>
                  <button
                    className="main-product-item__add"
                    onClick={addOnClick}
                  >
                    +
                  </button>
                </div>
                <div className="main-product-item__clear">
                  <MyButton
                    onClick={addOnClick}
                    text={"В КОРЗИНУ"}
                    st={"buttonTx"}
                  >
                    <svg
                      width="33"
                      height="30"
                      viewBox="0 0 33 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_56_1540)">
                        <path
                          d="M28.448 8.09209C28.2955 7.87908 28.0909 7.77258 27.8341 7.77258H11.4876L11.0439 6.61757C10.9316 6.23889 10.7791 5.91543 10.5865 5.6472C10.3939 5.37897 10.1893 5.18963 9.97259 5.07918C9.75592 4.96873 9.56734 4.89378 9.40684 4.85434C9.24635 4.81489 9.08585 4.79517 8.92536 4.79517H5.62717C5.41852 4.79517 5.24198 4.86617 5.09753 5.00817C4.95308 5.15018 4.88086 5.33163 4.88086 5.55253C4.88086 5.67876 4.91296 5.80104 4.97716 5.91938C5.04136 6.03772 5.13364 6.12844 5.25401 6.19155C5.37438 6.25467 5.49877 6.28622 5.62717 6.28622H8.92536C8.98955 6.28622 9.04974 6.29411 9.10591 6.30989C9.16209 6.32567 9.23832 6.39273 9.33462 6.51107C9.43092 6.62941 9.51117 6.80691 9.57537 7.04359L13.0283 16.5248C13.0604 16.6195 13.1126 16.7102 13.1848 16.797C13.257 16.8838 13.3413 16.9508 13.4376 16.9982C13.5339 17.0455 13.6382 17.0692 13.7506 17.0692H24.1507C24.3112 17.0692 24.4596 17.0218 24.5961 16.9272C24.7325 16.8325 24.8248 16.7142 24.8729 16.5722L28.5563 8.79029C28.6365 8.53783 28.6004 8.3051 28.448 8.09209ZM23.621 15.5545H14.3524L11.8968 9.2873H26.7266L23.621 15.5545ZM22.2328 17.8905C21.7031 17.8905 21.2497 18.0759 20.8726 18.4467C20.4954 18.8175 20.3068 19.2633 20.3068 19.784C20.3068 20.3047 20.4954 20.7504 20.8726 21.1212C21.2497 21.492 21.7031 21.6774 22.2328 21.6774C22.7624 21.6774 23.2158 21.492 23.593 21.1212C23.9701 20.7504 24.1587 20.3047 24.1587 19.784C24.1587 19.2633 23.9701 18.8175 23.593 18.4467C23.2158 18.0759 22.7624 17.8905 22.2328 17.8905ZM15.2993 17.8905C14.9462 17.8905 14.6212 17.9773 14.3243 18.1509C14.0274 18.3245 13.7947 18.5532 13.6262 18.8373C13.4576 19.1213 13.3734 19.4368 13.3734 19.784C13.3734 20.3047 13.562 20.7504 13.9391 21.1212C14.3163 21.492 14.7697 21.6774 15.2993 21.6774C15.829 21.6774 16.2824 21.492 16.6595 21.1212C17.0367 20.7504 17.2253 20.3047 17.2253 19.784C17.2253 19.6577 17.2133 19.5315 17.1892 19.4053C17.1651 19.2791 17.129 19.1607 17.0808 19.0503C17.0327 18.9398 16.9725 18.8333 16.9003 18.7308C16.8281 18.6282 16.7478 18.5335 16.6595 18.4467C16.5713 18.36 16.475 18.2811 16.3706 18.2101C16.2663 18.1391 16.158 18.0799 16.0456 18.0326C15.9333 17.9852 15.8129 17.9497 15.6845 17.9261C15.5561 17.9024 15.4277 17.8905 15.2993 17.8905Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_56_1540"
                          x="0"
                          y="0"
                          width="35"
                          height="35"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_56_1540"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_56_1540"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </MyButton>
                </div>
              </div>
              <div className="card__body">
                <div className="card__barcode">
                  Штрихкод:
                  <span> {productItem.barcode}</span>
                </div>
                <div className="card__manufacturer">
                  Производитель:
                  <span> {productItem.manufacturer}</span>
                </div>
                <div className="card__brand">
                  Бренд:
                  <span> {productItem.brand}</span>
                </div>
              </div>
              <div className="main-product-item__description">
                <h3>Описание</h3>
                <span>{productItem.description}</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default Product;
