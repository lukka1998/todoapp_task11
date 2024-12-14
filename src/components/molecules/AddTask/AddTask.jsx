import React, { useState, useContext } from 'react';
import { TaskContext } from '../TaskProvider/TaskProvider';
function AddTask() {
  const [newTask, setNewTask] = useState('');
  const { dispatch } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TASK', payload: newTask });
    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{padding:"10px 20px " }}
      />
      <button style={{marginLeft:"10px", padding:"10px", color:"white" ,background:"green", border:"none", cursor:"pointer"}} type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;