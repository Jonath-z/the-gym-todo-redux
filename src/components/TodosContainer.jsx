import React from "react";
import { useSelector } from "react-redux";
import storage from "../utils/storage";
import TodoCard from "./TodoCard";

function TodosContainer() {
  const todos = useSelector(
    (state) => storage.getTodos("_todos") || state.todo.value
  );

  return (
    <div className=" mt-10">
      {todos
        .map((todo, index) => <TodoCard key={index} todo={todo} />)
        .reverse()}
    </div>
  );
}

export default TodosContainer;
