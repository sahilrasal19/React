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

it("should load Body component after search", async () => {
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

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(3);
});

it("should load Body component before search", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(37);
});

it("should load top rated restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const beforeFiltering = screen.getAllByTestId("resCard");
  const topRatedButton = screen.getByRole("button", {
    name: "Top Restaurants",
  });
  fireEvent.click(topRatedButton);
  const afterFiltering = screen.getAllByTestId("resCard");
  expect(beforeFiltering.length).toBe(37);
  expect(afterFiltering.length).toBe(5);
});
