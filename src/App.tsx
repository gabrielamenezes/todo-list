import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'
import { TaskList } from './components/TaskList'

import './global.css'
import { TaskType } from './components/Task'
import { PlusCircle } from '@phosphor-icons/react'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function handleCreateNewTask() {
    setTasks([...tasks, {id: uuidv4(), name: taskInput, completed: false}])
    setTaskInput('');
  }
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <label>
          <TaskInput 
            taskInput={taskInput}
            setTaskInput={setTaskInput} 
            
          />
        </label>
        
        <button onClick={handleCreateNewTask}>
            Criar
            <PlusCircle size={22}/>
        </button>
        <TaskList taskList={taskList} taskCount={taskCount}/>
      </div>
    </>
  )
}

export default App
