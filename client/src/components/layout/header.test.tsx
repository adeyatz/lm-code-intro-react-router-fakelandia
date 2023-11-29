import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout";

describe("Header component() tests ", () => {
  it("Renders the Header component", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    const headerTxt = getByText(/Fakelandia/i);
    expect(headerTxt).toBeInTheDocument();
  });

  test("Navigation component has rendered", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    const navTextHome = getByText(/Home/i);
    expect(navTextHome).toBeInTheDocument();

    const navTextMis = getByText(/Misdemeanours/i);
    expect(navTextMis).toBeInTheDocument();
    const navTextConfess = getByText(/Confess/i);
    expect(navTextConfess).toBeInTheDocument();
  });
});
