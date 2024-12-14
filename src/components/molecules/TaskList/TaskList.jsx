import React, { useContext } from 'react';
import { TaskContext } from '../TaskProvider/TaskProvider'; 
function TaskList() {
  const { tasks, dispatch } = useContext(TaskContext);

  const handleToggle = (id) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  };

  return (
    <ul style={{}}>
      {tasks.map((task) => (
        <li style={{listStyleType:"none", textDecoration:"none", display:"flex" ,gap:"10px" ,alignItems:"center"} } key={task.id}>
          <input type="checkbox" checked={task.completed} onChange={() => handleToggle(task.id)} />
          <span style={{ padding:"10px ", border:"1px solid black", fontWeight:"600" }}>{task.text}</span>
          <button  style={{marginLeft:"10px", padding:"10px", color:"white" ,background:"red", border:"none" ,cursor:"pointer"}} onClick={() => handleRemove(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;