import React from "react";

import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";

import ProductBloc from "../components/ProductBloc/ProductBloc";
import Sceleton from "../components/ProductBloc/Sceleton";
import Sorting from "../components/Sorting";

// import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../types/hook";
import {
  setCategoryId,
  setSortName,
  setPriceMin,
  setPriceMax,
  setCheckboxManufacturer,
} from "../redux/slices/filterSlices";
import MyAside from "../components/aside/MyAside";

function Home({ isLoading }: any) {
  // const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useAppDispatch();
  let {
    categoryId,
    sort,
    priceMin,
    priceMax,
    checkboxManufacturer,
    productCard,
  } = useAppSelector((state: any) => state.filters);

  function addSortingActive(index: any) {
    dispatch(setSortName(index));
  }
  function addCategoriesActive(index: number) {
    dispatch(setCategoryId(index));
  }

  let items = productCard;

  items = React.useMemo(() => {
    return productCard.filter((obj: any) => {
      if (obj.typeCare.includes(categoryId)) {
        return true;
      }
    });
  }, [categoryId, productCard]);

  if (priceMax !== 0) {
    items = items.filter((obj: any) => {
      if (obj.price > priceMin && obj.price < priceMax) {
        return true;
      }
    });
  }

  if (checkboxManufacturer.length !== 0) {
    items = items.filter((obj: any) => {
      if (checkboxManufacturer.includes(obj.manufacturer)) {
        return true;
      }
    });
  }

  items.sort((a: any, b: any) => {
    switch (sort.sortProperty) {
      case "name":
        return a.name.localeCompare(b.name);
      case "-name":
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      case "-price":
        return a.price - b.price;
      case "price":
        return b.price - a.price;
    }
  });

  function testProduct(valueMinMax: any, checkboxTrue: any) {
    console.log(valueMinMax, checkboxTrue);
    dispatch(setPriceMax(valueMinMax.max));
    dispatch(setPriceMin(valueMinMax.min));
    dispatch(setCheckboxManufacturer(checkboxTrue));
  }

  return (
    <div>
      <Header></Header>
      <main className="main">
        <div className="main__container">
          <div className="main__product main-product">
            <div className="main-product__title">
              <h1>Косметика и гигиена</h1>
              <Sorting value={sort} addActive={addSortingActive}></Sorting>
            </div>
            <div className="main-product__categories">
              <Categories
                value={categoryId}
                addActive={addCategoriesActive}
              ></Categories>
            </div>
            <div className="main-product__body main-product-body">
              <MyAside create={testProduct}></MyAside>

              <div className="main-product-body__rows">
                <div className="main-product-body__items">
                  {isLoading
                    ? [...new Array(6)].map((_, index) => (
                        <Sceleton key={index}></Sceleton>
                      ))
                    : items.map((item: any, index: any) => (
                        <ProductBloc key={index} item={item} />
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default Home;
