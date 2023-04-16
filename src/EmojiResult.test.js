import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import emojiList from "./emojiList.json";
describe("emoji-list-render", () => {
  beforeEach(() => {
    render(<App />);
  });
  test("Rendering emoji list", () => {
    const ListOfEmoji = emojiList.slice(0, 20);
    ListOfEmoji.map((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
