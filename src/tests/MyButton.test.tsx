import React from "react";
import { render, screen } from "@testing-library/react";
import MyButton from "../components/UI/MyButton";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

describe("MyButton", () => {
  test("MyButton", () => {
    render(<MyButton />);
    const linkElement = screen.getByTestId("custom-button");
    expect(linkElement).toMatchSnapshot();
  });
});
