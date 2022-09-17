import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const onAddTodo = (text) => {
    saveTodos([...todos, { completed: false, text }]);
  };

  const onComplete = (text) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.text === text) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    saveTodos(updatedTodos);
  };

  const onDelete = (text) => {
    const updatedTodos = todos.filter((todo) => todo.text !== text);
    saveTodos(updatedTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        onComplete,
        onDelete,
        isModalOpen,
        setIsModalOpen,
        onAddTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
