import React from "react";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// importing the component to be tested
import Todo from "./Todo";

describe("<Todo />", () => {
  afterEach(cleanup);

  it("should render the correct data", () => {
    const removeTodo = jest.fn();
    const saveEditTodo = jest.fn();

    const todo = { id: 1, text: "pulkit" };

    const { getByText, getByTestId } = render(
      <Todo todo={todo} removeTodo={removeTodo} saveEditTodo={saveEditTodo} />
    );

    expect(getByText("pulkit")).toBeTruthy();
    expect(getByTestId("todo").id).toEqual("1");
  });

  it("should display edit todo form when edit button is clicked", () => {
    const removeTodo = jest.fn();
    const saveEditTodo = jest.fn();

    const todo = { id: 1, text: "pulkit" };

    const { getByText, getByTestId } = render(
      <Todo todo={todo} removeTodo={removeTodo} saveEditTodo={saveEditTodo} />
    );

    userEvent.click(getByText("edit"));
    expect(getByTestId("edittodo")).toBeTruthy();
  });

  it("should run the remove todo function when remove todo is clicked", () => {
    const removeTodo = jest.fn();
    const saveEditTodo = jest.fn();

    const todo = { id: 1, text: "pulkit" };

    const { getByText } = render(
      <Todo todo={todo} removeTodo={removeTodo} saveEditTodo={saveEditTodo} />
    );

    userEvent.click(getByText("remove"));
    expect(removeTodo).toHaveBeenCalled();
    expect(removeTodo).toHaveBeenCalledTimes(1);
  });
});
