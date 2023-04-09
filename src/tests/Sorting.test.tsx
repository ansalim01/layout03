import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Sorting from "../components/Sorting";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
jest.mock("axios");

describe("Sorting", () => {
  test("Проверка отрисовку сортировки", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Sorting />
        </Provider>
      </MemoryRouter>
    );
    const btn = screen.getByTestId("toggle-btn");
    // const toggleDiv = screen.queryByTestId("toggle-item");
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
    fireEvent.click(btn, {});
    expect(screen.getByTestId("toggle-elem")).toBeInTheDocument();
    fireEvent.click(btn, {});
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
  });
});
