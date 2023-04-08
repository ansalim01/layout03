import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductBloc from "../components/ProductBloc/ProductBloc";
import Sceleton from "../components/ProductBloc/Sceleton";
import Sorting from "../components/Sorting";
import FilterProduct from "../components/FilterProduct";
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
  const dispatch = useAppDispatch();
  let { categoryId, sort } = useAppSelector((state: any) => state.filters);

  function addSortingActive(index: any) {
    dispatch(setSortName(index));
  }
  function addCategoriesActive(index: number) {
    dispatch(setCategoryId(index));
  }
  //фильтрация продуков.
  let items = FilterProduct();

  function testProduct(valueMinMax: any, checkboxTrue: any) {
    dispatch(setPriceMax(valueMinMax.max));
    dispatch(setPriceMin(valueMinMax.min));
    dispatch(setCheckboxManufacturer(checkboxTrue));
  }

  return (
    <div>
      <Header crumbs={"Косметика и гигиена"}></Header>
      <main className="main">
        <div className="main__container _container">
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
