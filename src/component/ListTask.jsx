import React, { useState } from "react";
import "./AddTask";

const ListTask = ({ task, index, removeTask }) => {
  const [animate, setAnimate] = useState(false);

  const handleRemoveTask = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      removeTask(index);
    }, 300);
  };

  return (
    <div className="list-tasks">
      {task.title}{" "}
      <button
        className={`add-button delete-button bg-warning ${
          animate ? "animate" : ""
        }`}
        onClick={handleRemoveTask}
      >
        Delete
      </button>
    </div>
  );
};

export default ListTask;
