import React, { useState } from "react";
import "./Todo.css";

function Task({ task }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
    </div>
  );
}

function Todo() {
  const [tasks, setTask] = useState([
    {
      title: "Grab some Pizza",
      completed: true
    },
    {
      title: "Do your workout",
      completed: true
    },
    {
      title: "Hangout with friends",
      completed: false
    }
  ]);
  return (
    <div className="todo-container">
      <div className="header">Todo - Items</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task task={task} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Todo;
