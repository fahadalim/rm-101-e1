import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [data,setData] = useState({})
  const [total,setTotal] =useState([])
  const handleChange = (e) => {
    //console.log(e.target)
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };
  console.log(data)
  const handleSubmit = (e) => {
    e.preventDefault();
    setTotal([...total, data]);
  };
  console.log(total)

  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" onChange={handleChange} type="text" />
      <button data-testid="add-task-button" onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default AddTask;
