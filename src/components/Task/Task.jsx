import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./task.module.css";

const Task = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8000/data").then(({data})=>{
      setData(data.data)
    })
  },[])
  return (
    <li data-testid="task" className={styles.task}>
      {data.map((d)=>(
        <>
      <input type="checkbox" data-testid="task-checkbox" />
      <div data-testid="task-text">{d.text}</div>
      {/* Counter here */}
      <button data-testid="task-remove-button"></button>
      </>
      ))}
    </li>
  );
};

export default Task;
