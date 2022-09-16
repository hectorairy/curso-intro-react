import React from "react";
import { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoCounter.css";

export const TodoCounter = () => {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
};
