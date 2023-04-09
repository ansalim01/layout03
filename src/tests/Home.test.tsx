import Home from "../pages/Home";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
// import React, { Component } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
// import { useAppDispatch, useAppSelector } from "../types/hook";
import * as reduxHooks from "react-redux";

jest.mock("react-redux");

const product = [
  {
    id: 0,
    imageUrl:
      "https://noht.ru/preview/products/type_1000x800/2017/12/1329430.jpg?v=1679513166",
    name: "Крем Алиса",
    sizeType: "г",
    sizes: 125,
    barcode: 0,
    manufacturer: "Свобода",
    brand: "Свобода",
    description: "Предназначен для защиты, смягчения и увлажнения кожи рук.",
    price: 81,
    typeCare: [0, 2],
  },
];

describe("Home", () => {
  it("Проверка отрисовку товара", () => {
    jest.spyOn(reduxHooks, "useSelector").mockReturnValue(product);
    const view = render(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>
    );
    expect(view).toMatchSnapshot();
  });
  it("Проверка отрисовку товара пустой []", () => {
    jest.spyOn(reduxHooks, "useSelector").mockReturnValue([]);
    const view = render(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>
    );
    expect(view).toMatchSnapshot();
  });
});
