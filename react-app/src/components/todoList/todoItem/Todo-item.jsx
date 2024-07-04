import "./Todo-Item.scss";

import CompleteTask from "./CompleteTask";
import TaskTitle from "./TaskTitle";
import DeleteTask from "./DeleteTask";

const TodoItem = ({ task, removeTask, toggleComplete }) => {
  const removeTaskHandler = (taskId) => {
    removeTask(taskId);
  };

  const toggleCompleteHandler = (taskId) => {
    toggleComplete(taskId);
  };

  return (
    <div className="list-item" style={{ opacity: task.completed && "0.5" }}>
      <CompleteTask toggleCompleteHandler={toggleCompleteHandler} task={task} />
      <TaskTitle task={task} />
      <DeleteTask removeTaskHandler={removeTaskHandler} task={task} />
    </div>
  );
};

export default TodoItem;
