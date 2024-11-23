import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'
import { TaskList } from './components/TaskList'

import './global.css'
import { TaskType } from './components/Task'

function App() {
  const [taskInput, setTaskInput] = useState('');
  const [taskList, setTaskList] = useState<TaskType[]>([]);
  const [taskCount, setTaskCount] = useState(0)
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <TaskInput 
          taskInput={taskInput}
          setTaskList={setTaskList} 
          setTaskInput={setTaskInput} 
          taskList={taskList} 
          setTaskCount={setTaskCount}
          taskCount={taskCount}
        />
        <TaskList taskList={taskList} taskCount={taskCount} />
      </div>
    </>
  )
}

export default App
