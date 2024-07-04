import React from "react";

import "./CompleteTask.scss";

import checked from "../../../images/checked.jpg";
import unchecked from "../../../images/unchecked.jpg";

const CompleteTask = ({ toggleCompleteHandler, task }) => {


  const toggleComplete = (taskId) => {
    toggleCompleteHandler(taskId);
  };


  return (
    <>
      <button
        className="complete-btn"
        onClick={() => toggleComplete(task.id)}
      >
        <img
          src={task.completed ? checked : unchecked}
          alt="checked unchecked"
        />
      </button>
    </>
  );
};

export default CompleteTask;
