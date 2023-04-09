import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header";
import * as reduxHooks from "react-redux";

jest.mock("react-redux");

describe("header", () => {
  test("Проверка отрисовку хедера", () => {
    jest.spyOn(reduxHooks, "useSelector").mockReturnValue({});
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const Logo = screen.getByTestId("headerLogo");
    const End = screen.getByTestId("headerEnd");
    const InfoItem = screen.getByTestId("headerInfoItem");
    expect(Logo).toBeInTheDocument();
    expect(End).toBeInTheDocument();
    expect(InfoItem).toBeInTheDocument();
  });
});
