import { CreateTodoButton } from "./components/CreateTodoButton";
import { EmptyTodos } from "./components/EmptyTodos";
import { Error } from "./components/Error";
import { Loader } from "./components/Loader";
import { Modal } from "./components/Modal";
import { TodoCounter } from "./components/TodoCounter";
import { TodoForm } from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { useTodos } from "./hooks/useTodos";

function App() {
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
  } = useTodos();

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
}

export default App;
