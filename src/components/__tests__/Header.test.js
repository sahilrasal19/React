const { render } = require("@testing-library/react");
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //   const loginButton = screen.getByText("Login");
  const loginButton = screen.getByRole("button", { name: "LogIn" });

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header component with a cart 0-items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //   const cartItems = screen.getByText(/Cart/);
  const cartItems = screen.getByText("Cart-(0 items)");

  expect(cartItems).toBeInTheDocument();
});

it("Should change a login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "LogIn" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "LogOut" });

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //   const loginButton = screen.getByText("Login");
  const loginButton = screen.getByRole("button", { name: "LogIn" });

  expect(loginButton).toBeInTheDocument();
});
