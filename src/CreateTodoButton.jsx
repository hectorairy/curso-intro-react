import React from "react";
import "./CreateTodoButton.css";

export const CreateTodoButton = () => {
  const onClickButton = (msg) => {
    alert(msg);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton("Aquí se debería de abrir el modal")}
    >
      +
    </button>
  );
};
