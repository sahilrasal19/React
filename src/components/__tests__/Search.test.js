import { fireEvent, render } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mockData/mockresList.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should load Body component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const searchButton = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "Sahara" } });
  fireEvent.click(searchButton);
  expect(searchButton).toBeInTheDocument();
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(3);
});
