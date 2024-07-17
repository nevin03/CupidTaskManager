import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [animate, setAnimate] = useState(false);

  const handleAddTask = () => {
    if (title.trim() !== "") {
      addTask(title);
      setTitle("");
      setAnimate(true);
      setTimeout(() => setAnimate(false), 300);
    }
  };

  return (
    <div>
      <input
        type="text"
        className="input-field"
        placeholder="Add task here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className={`add-button ${animate ? "animate" : ""}`}
        onClick={handleAddTask}
      >
        &#128525;
      </button>
    </div>
  );
};

export default AddTask;
