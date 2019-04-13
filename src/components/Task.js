import React from "react";

function Task({ task, index, updateTask, removeTask }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
      <button style={{ background: "red" }} onClick={() => removeTask(index)}>
        x
      </button>
      <button onClick={() => updateTask(index)}>
        {!task.completed ? "Complete" : "Todo"}
      </button>
    </div>
  );
}

export default Task;
