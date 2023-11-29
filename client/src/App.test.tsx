import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
// import { fireEvent } from "@testing-library/react";
import App from "./App";

test("demo", () => {
  expect(true).toBe(true);
});

test("Renders the main page, expect 1 image", async () => {
  render(<App />);
  const images = screen.getAllByRole(`img`);
  expect(images.length).toBe(1);
});

/*
it("should have a count value of 0 when app loads", () => {
  const { getByText } = render(<App />);

  const count = getByText(/count is/);

  expect(count.textContent).toContain("0");
});

it("should increment count value", () => {
  const { getByText } = render(<App />);

  const count = getByText(/count is/);
  fireEvent.click(count);

  expect(count.textContent).toContain("1");
});

it("should reset increment count value", () => {
  const { getByText, rerender } = render(<App />);

  rerender(<App />);
  const count = getByText(/count is/);
  fireEvent.click(count);

  expect(count.textContent).toContain("1");
});
*/
