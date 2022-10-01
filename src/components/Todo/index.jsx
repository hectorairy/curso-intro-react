import React from "react";
import { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import { CreateTodoButton } from "../CreateTodoButton";
import { EmptyTodos } from "../EmptyTodos";
import { Error } from "../Error";
import { Loader } from "../Loader";
import { Modal } from "../Modal";
import { TodoCounter } from "../TodoCounter";
import { TodoForm } from "../TodoForm";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";

export const Todo = () => {
  const {
    error,
    loading,
    searchedTodos,
    onComplete,
    onDelete,
    isModalOpen,
    completedTodos,
    totalTodos,
    setSearchValue,
    onAddTodo,
    setIsModalOpen,
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />

      <TodoSearch setSearchValue={setSearchValue} />

      <TodoList>
        {error && <Error />}
        {loading && <Loader />}
        {!loading && !searchedTodos.length && <EmptyTodos />}
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

      <CreateTodoButton
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
      {isModalOpen && (
        <Modal>
          <TodoForm onAddTodo={onAddTodo} setIsModalOpen={setIsModalOpen} />
        </Modal>
      )}
    </>
  );
};
