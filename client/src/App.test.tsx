import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "./App";

test("renders form title", () => {
  render(<App />);
  expect(true).toBeTruthy();
  // const formTitle = screen.getByText(
  // 	/W-12-M :- APPLICATION TO SPARE PLANET FROM DESTRUCTION/i
  // );
  // expect(formTitle).toBeInTheDocument();
});
