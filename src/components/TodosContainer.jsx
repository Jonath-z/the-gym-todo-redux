import React from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

function TodosContainer() {
  const todos = useSelector((state) => state.todo.value);

  return (
    <div className=" mt-10">
      {todos
        .map((todo, index) => <TodoCard key={index} todo={todo} />)
        .reverse()}
    </div>
  );
}

export default TodosContainer;
