import React from "react";

import './Todo-filters.scss';

const TodoFilters = ({ sortByTodo, sortByDone, sortByAll }) => {
  const handleSortByTodo = () => {
    sortByTodo();
  };
  const handleSortByDone = () => {
    sortByDone();
  };
  const handleSortByAll = () => {
    sortByAll();
  };

  return (
    <div className="filter">
      <img
        src="https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/11-512.png"
        alt="completed task icon"
        style={{ maxWidth: "25px", maxHeight: "20px" }}
      />

      <div className="filter-buttons">
        <button onClick={handleSortByTodo}>TODO</button>
        <button onClick={handleSortByDone}>DONE</button>
        <button onClick={handleSortByAll}>ALL</button>
      </div>
    </div>
  );
};

export default TodoFilters;
