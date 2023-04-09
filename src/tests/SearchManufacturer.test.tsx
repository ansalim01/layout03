import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchManufacturer from "../components/aside/SearchManufacturer";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
jest.mock("axios");

describe("SearchManufacturer", () => {
  test("Проверка inputa", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SearchManufacturer />
        </Provider>
      </MemoryRouter>
    );

    // screen.debug()
    const input = screen.getByTestId("input");
    expect(screen.getByTestId("input")).toContainHTML("");
    fireEvent.input(input, {
      target: { value: "test" },
    });
    expect(screen.getByTestId("input")).toContainHTML("test");
  });
});
