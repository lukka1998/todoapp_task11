import React, { useContext } from 'react';
import { TaskContext } from '../TaskProvider/TaskProvider';

function ClearCompleted() {
  const { dispatch } = useContext(TaskContext);

  const handleClearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  return (
    <button style={{marginLeft:"10px", padding:"10px", color:"white" ,background:"blue", border:"none", cursor:"pointer", width:"200px"}} onClick={handleClearCompleted}>Clear Completed</button>
  );
}

export default ClearCompleted;