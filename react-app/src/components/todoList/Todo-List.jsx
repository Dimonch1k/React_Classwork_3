import React, { useEffect, useState } from "react";
import "./Todo.scss";

import TodoAddTask from "./todoAddTask/Todo-add-task";
import TodoFilters from "./todoFilters/Todo-filters";
import TodoItem from "./todoItem/Todo-item";
import TodoHeader from "./Todo-header";

import { taskList } from "./taskList";

const TodoList = () => {
  const [tasks, setTasks] = useState(taskList);

  const addTask = (title) => {
    const newTask = {
      id: Math.random(),
      title: title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id !== taskId) return task;
        return { ...task, completed: !task.completed };
      })
    );
  };

  const sortByTodo = () => {
    const sortedTasks = tasks.sort((a, b) => a.completed - b.completed);
    setTasks(sortedTasks);
  };

  const sortByDone = () => {
    const sortedTasks = tasks.sort((a, b) => b.completed - a.completed);
    setTasks(sortedTasks);
  };

  const sortByAll = () => {
    setTasks(taskList);
  };


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);



  return (
    // .To Do
    <div className="todo">
      {/* Header */}
      <TodoHeader />

      {/* Add item to Todo List */}
      <TodoAddTask addTask={addTask} />

      <div className="todo-wrapper">
        {/* Filters */}
        <TodoFilters sortByTodo={sortByTodo} sortByDone={sortByDone} sortByAll={sortByAll} />

        {/* Task list */}
        <div className="task-list">
          {/* Fill task list with basic tasks */}
          {tasks.map((task) => (
            <TodoItem key={task.id} task={task} removeTask={removeTask} toggleComplete={toggleComplete} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
