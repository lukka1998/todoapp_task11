import { useState } from 'react'
import './App.css'
import TaskList from './components/molecules/TaskList/TaskList'
import { TaskProvider } from './components/molecules/TaskProvider/TaskProvider'
import AddTask from './components/molecules/AddTask/AddTask'
import ClearCompleted from './components/molecules/ClearCompleted/ClearCompleted'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskProvider>
      <div style={{display:"flex ", flexDirection:"column" ,justifyContent:"center" ,alignItems:"center", height:"100vh"}}>
        <AddTask />
        <TaskList />
        <ClearCompleted />
      </div>
    </TaskProvider>
    </>
  )
}

export default App
