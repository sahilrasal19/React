import RestaurantCards from "../RestaurantCards";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mockData/resCardsmock.json";

it("Should render res cards with given name", () => {
  render(<RestaurantCards restData={MOCK_DATA} />);

  const name = screen.getByText("Sahara Family Restaurant");

  expect(name).toBeInTheDocument();
});
