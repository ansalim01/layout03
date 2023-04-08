import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

jest.mock("axios");

describe("test app", () => {
  test("renders learn react link", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    const linkElement = screen.getByTestId("div-app");
    expect(linkElement).toBeInTheDocument();
  });
});
