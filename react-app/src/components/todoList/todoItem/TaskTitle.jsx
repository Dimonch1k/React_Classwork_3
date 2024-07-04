import React from "react";

import './TaskTitle.scss';

const TaskTitle = ({ task }) => {
  return (
    <>
      <input
        className="task-title"
        defaultValue={task.title}
        style={{
          textDecoration: task.completed && "line-through",
        }}
      />
    </>
  );
};

export default TaskTitle;
