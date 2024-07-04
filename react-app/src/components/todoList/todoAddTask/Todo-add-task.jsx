import React, { useState } from "react";

import './TodoAddTask.scss';

import todoList from "../../../images/todoList.png";
import addTaskIcon from "../../../images/add-task_icon.jpg";

const TodoAddTask = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const addTaskHandler = (title) => {
    addTask(title);
    setTitle("");
  };

  return (
    <div className="add-task">
      <img src={todoList} alt="Todo list icon" className="add-task__icon" />

      <input
        type="text"
        className="add-task__text"
        id="add-task-text"
        placeholder="Enter your next task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button className="add-task__btn" onClick={() => addTaskHandler(title)}>
        <img
          src={addTaskIcon}
          alt="white plus icon"
          style={{ width: "20px", height: "20px" }}
        />
      </button>
    </div>
  );
};

export default TodoAddTask;
