import React, { useState } from "react";
import { Todo } from "./components/Todo";

// import "./App.css";

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar el curso de intro a react", completed: true },
  { text: "Llorar con la llorona", completed: true },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");

  let searchedTodos = [];
  if (searchValue.length) {
    searchedTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );
  } else {
    searchedTodos = todos;
  }
  const totalTodos = searchedTodos.length;
  const completedTodos = searchedTodos.filter((todo) => todo.completed).length;

  const onComplete = (text) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.text === text) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
    alert("Ya completaste el TODO " + text);
  };

  const onDelete = (text) => {
    const updatedTodos = todos.filter((todo) => todo.text !== text);
    setTodos(updatedTodos);
    alert("Eliminaste el TODO " + text);
  };

  return (
    <Todo
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      onComplete={onComplete}
      onDelete={onDelete}
    />
  );
}

export default App;
