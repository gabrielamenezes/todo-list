import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'

import './global.css'
import { TaskType } from './components/Task'
import { PlusCircle } from '@phosphor-icons/react'
import { v4 as uuidv4 } from 'uuid';
import { EmptyList } from './components/EmptyList'


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
          <button onClick={handleCreateNewTask}>
            Criar
            <PlusCircle size={22}/>
        </button>
        </label>
        
        <header className={styles.taskHeader}>
          <p className={styles.createdTasks}>Tarefas criadas <span>{tasks.length}</span></p>
          <p className={styles.completedTasks}>Concluídas <span>{}</span> de <span>{tasks.length}</span></p>
        </header>
        {tasks.length > 0 ? <>oi</> : <EmptyList />}
      </div>
    </>
  )
}

export default App
