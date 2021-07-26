/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import "setimmediate";

import { render, screen } from "@testing-library/react";
import Home from "src/pages";

it("Should render title text", () => {
  render(<Home />);
  expect(
    screen.getByText("This is Next.js Starter Template")
  ).toBeInTheDocument();
  expect(screen.getByText("Check Pull Request!")).toBeInTheDocument();
});