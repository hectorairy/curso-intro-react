import React from "react";
import "./TodoList.css";

export const TodoList = ({
  error,
  loading,
  searchedTodos,
  totalTodos,
  searchValue,
  onError,
  onLoading,
  onEmptyTodos,
  onEmptySearchedTodos,
  onRender,
  children,
}) => {
  const render = children || onRender;

  return (
    <section>
      {error && onError()}
      {loading && onLoading()}
      {!loading && !totalTodos && onEmptyTodos()}
      {!!totalTodos &&
        !searchedTodos.length &&
        onEmptySearchedTodos(searchValue)}
      {searchedTodos.map(render)}
    </section>
  );
};
