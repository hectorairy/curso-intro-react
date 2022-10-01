import React from "react";
import "./TodoSearch.css";

export const TodoSearch = ({ setSearchValue, loading }) => {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <input
        className="TodoSearch"
        placeholder="Cebolla"
        onChange={onSearchValueChange}
        disabled={loading}
      />
    </>
  );
};
