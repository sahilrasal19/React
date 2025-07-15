import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  beforeAll(() => {
    console.log("before all tests this will run");
  });
  beforeEach(() => {
    console.log("before each test this will run");
  });

  afterAll(() => {
    console.log("after all tests this will run");
  });

  afterEach(() => {
    console.log("after each test this will run");
  });

  test("Should load contact page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should load input name", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    // console.log(inputBoxes);
  });
});
