import React from "react";
import "./CreateTodoButton.css";

export const CreateTodoButton = ({ setIsModalOpen, isModalOpen }) => {
  const onClickButton = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
};
