import { useState } from "react";

import "./TodoForm.css";

export const TodoForm = ({ onAddTodo, setIsModalOpen }) => {
  const [newTodoValue, setNewTodoValue] = useState("");

  const onCancel = () => {
    setIsModalOpen(false);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(newTodoValue);
    setIsModalOpen(false);
  };

  const onHandleChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onHandleChange}
        placeholder="Cortar la cebolla para el almuerzo"
      ></textarea>

      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Agregar
        </button>
      </div>
    </form>
  );
};
