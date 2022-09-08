import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a Text", () => {
    // Arrange
    render(<Greeting />);

    // act
    // nothin

    //assert
    const helloWorldElement = screen.getByText("Hello World");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders changed! if the button was cliccked", () => {
    //arrange
    render(<Greeting />);

    //act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // assert
    const outputElement = screen.getByText("changed!", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "good to seeyou" if the button was clicked', () => {
    //arrange
    render(<Greeting />);

    //act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // assert
    const outputElement = screen.queryByText("good to see you", { exact: false });
    expect(outputElement).toBeNull
  });
});
