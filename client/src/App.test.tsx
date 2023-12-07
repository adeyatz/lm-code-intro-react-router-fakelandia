// import "@testing-library/jest-dom";
// import "happy-dom";
import { render, screen } from "@testing-library/react";
import useEvent from "@testing-library/user-event";
import App from "./App";

test("demo", () => {
  expect(true).toBe(true);
});

test("Renders the main page, expect 1 image", async () => {
  render(<App />);
  const images = screen.getAllByRole(`img`);
  expect(images.length).toBe(1);
});

test("Renders the main page, expect home component to be visible", async () => {
  const { getByText } = render(<App />);

  expect(getByText(/Welcome to the home/)).toBeInTheDocument();
});

test("tab test from testing-library.com", async () => {
  const user = useEvent.setup();
  render(
    <div>
      <input type="checkbox" />
      <input type="radio" />
      <input type="number" />
    </div>
  );

  const checkbox = screen.getByRole("checkbox");
  const radio = screen.getByRole("radio");
  const number = screen.getByRole("spinbutton");

  expect(document.body).toHaveFocus();

  await user.tab();

  expect(checkbox).toHaveFocus();

  await user.tab();

  expect(radio).toHaveFocus();

  await user.tab();

  expect(number).toHaveFocus();

  await user.tab();

  // cycle goes back to the body element
  expect(document.body).toHaveFocus();

  await user.tab();

  expect(checkbox).toHaveFocus();
});

test("Renders the main page, user clicks Misdemeanours NavLink, expect Misdemeanours component to be visible", async () => {
  const user = useEvent.setup();

  const { getByText } = render(<App />);

  expect(getByText(/Welcome to the home/)).toBeInTheDocument();

  const navLink = getByText(/Misdemeanours/);
  console.log(navLink.getAttribute("href") + "---" + navLink.innerText);
  await user.click(navLink);
  // TODO why does this not work!!!!
  expect(screen.getByText(/Misdemeanour!/)).toBeDefined();
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
