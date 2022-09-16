import React, { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoSearch.css";

export const TodoSearch = () => {
  const { setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <input
        className="TodoSearch"
        placeholder="Cebolla"
        onChange={onSearchValueChange}
      />
    </>
  );
};
