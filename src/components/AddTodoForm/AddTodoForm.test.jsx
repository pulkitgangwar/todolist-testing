import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// importing component to be tested
import AddTodoForm from "./AddTodoForm";

describe("<AddTodoForm />", () => {
  afterEach(cleanup);

  it("should render the initial state in the input element", () => {
    const addTodo = jest.fn();
    const { getByPlaceholderText } = render(<AddTodoForm addTodo={addTodo} />);

    expect(getByPlaceholderText("Enter a todo").value).toEqual("");
  });

  it("should render the change when input element changes", () => {
    const addTodo = jest.fn();
    const { getByPlaceholderText } = render(<AddTodoForm addTodo={addTodo} />);

    userEvent.type(getByPlaceholderText("Enter a todo"), "Some Text");

    expect(getByPlaceholderText("Enter a todo").value).toEqual("Some Text");
  });

  it("should call the addtodo function when form is submitted", () => {
    const addTodo = jest.fn();
    const { getByTestId, getByPlaceholderText } = render(
      <AddTodoForm addTodo={addTodo} />
    );

    fireEvent.submit(getByTestId("addtodoform"));
    expect(addTodo).toHaveBeenCalledTimes(0);

    userEvent.type(getByPlaceholderText("Enter a todo"), "Some Text");

    fireEvent.submit(getByTestId("addtodoform"));
    expect(addTodo).toHaveBeenCalled();
    expect(addTodo).toHaveBeenCalledTimes(1);
  });
});
