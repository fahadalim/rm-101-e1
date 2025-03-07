import React from "react";
import { Counter } from "../Counter";
import styles from "./task.module.css";

const Task = ({ task, handleFunction }) => {
  // NOTE: do not delete `data-testid` key value pair

  function toggleStatus() {
    handleFunction({
      ...task,
      done: !task.done,
    });
  }

  const handleCount = (el) => {
    // if(el>0){
    handleFunction({
      ...task,
      count: el,
    });
    // }
  };

  const handleDelete = (id) => {
    task.filter((e) => {
      return e.id != id;
    });
    console.log(task);
  };
  console.log(task);
  return (
    <li data-testid="task" className={styles.task}>
      <input
        type="checkbox"
        data-testid="task-checkbox"
        onChange={toggleStatus}
        checked={task.done}
      />
      <div data-testid="task-text">{task.text}</div>
      {/* Counter here */}
      <Counter counter={task.count} handleCountTodo={handleCount}></Counter>
      <button
        data-testid="task-remove-button"
        onClick={() => handleDelete(task.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Task;
