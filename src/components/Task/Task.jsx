import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./task.module.css";

const Task = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8000/").then(({data})=>(
      setData(data.users)
    ))
  },[])
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" />
      <div data-testid="task-text"></div>
      {/* Counter here */}
      <button data-testid="task-remove-button">delete</button>
    </li>
  );
};

export default Task;
