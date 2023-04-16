import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Rendering-header", () => {
  let headerRender;
  beforeEach(() => {
    render(<Header />);
    headerRender = screen.getByText("Emoji Search");
  });
  test("Document should be have HeaderComponent", () => {
    expect(headerRender).toBeInTheDocument();
  });
});
