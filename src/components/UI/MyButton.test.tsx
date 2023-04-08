import React from "react";
import { render, screen } from "@testing-library/react";
import MyButton from "./MyButton";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

jest.mock("axios");

describe("test app", () => {
  test("renders learn react link", () => {
    render(<MyButton />);

    // screen.debug()
    const linkElement = screen.getByTestId("custom-button");
    expect(linkElement).toMatchSnapshot();
  });
});
