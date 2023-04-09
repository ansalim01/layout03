import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../components/Footer";
import * as reduxHooks from "react-redux";

jest.mock("react-redux");

describe("Footer", () => {
  test("Проверка отрисовку Footer", () => {
    jest.spyOn(reduxHooks, "useSelector").mockReturnValue({});
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const div = screen.getByTestId("footerDiv");
    const contacts = screen.getByTestId("footerContacts");

    expect(div).toBeInTheDocument();
    expect(contacts).toBeInTheDocument();
  });
});
