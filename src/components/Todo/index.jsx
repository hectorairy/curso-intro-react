import React from "react";
import { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoCounter } from "../TodoCounter";
import { TodoForm } from "../TodoForm";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";

export const Todo = () => {
  const { error, loading, searchedTodos, onComplete, onDelete, isModalOpen } =
    useContext(TodoContext);
  return (
    <>
      <TodoCounter />

      <TodoSearch />

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
      {isModalOpen && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
};
