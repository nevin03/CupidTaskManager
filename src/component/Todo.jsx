import React, { useEffect, useState } from "react";
import "./Todo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

const Todo = () => {
  const [tasks, setTask] = useState([]);
  useEffect(() => {
    document.title = `You have ${tasks.length} task(s) to complete`;
  });

  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    setTask(newTask);
  };

  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTask(newTask);
  };

  return (
    <>
      <div className="container-todo">
        <div className="header text-center">Cupid Task Manager</div>
        <div className="add-tasks text-center">
          <AddTask addTask={addTask} />
        </div>
        <div className="tasks text-center">
          {tasks.map((task, index) => (
            <ListTask
              task={task}
              removeTask={removeTask}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
