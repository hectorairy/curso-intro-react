import React from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";

export const Todo = ({
  error,
  loading,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  onComplete,
  onDelete,
}) => {
  return (
    <>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {error && <p>Desespérate, hubo un error :(</p>}
        {loading && <p>Estamos cargando...</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer TODO</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => onComplete(todo.text)}
            onDelete={() => onDelete(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
};
