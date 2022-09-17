import React from "react";
import { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import "./CreateTodoButton.css";

export const CreateTodoButton = () => {
  const { setIsModalOpen, isModalOpen } = useContext(TodoContext);
  const onClickButton = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
};
