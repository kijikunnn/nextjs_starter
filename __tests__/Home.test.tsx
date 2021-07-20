/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "setimmediate";
import Home from "../src/pages/index";

it("Should render title text", () => {
  render(<Home />);
  expect(
    screen.getByText("This is Next.js Starter Template")
  ).toBeInTheDocument();
});
