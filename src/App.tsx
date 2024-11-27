import { ChangeEvent, useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'

import './global.css'
import { Task } from './components/Task'
import { PlusCircle } from '@phosphor-icons/react'
import { v4 as uuidv4 } from 'uuid';
import { EmptyList } from './components/EmptyList'
export interface TaskType {
  id: string,
  name: string;
  completed: boolean;
}

function App() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState<TaskType[]>([]);


  function handleCreateTask() {
    if(!taskInput) {
      return
    }
    setTasks([...tasks, {id: uuidv4(), name: taskInput, completed: false}])
    setTaskInput('');
  }
  function deleteTask(id: string) {
    setTasks(task => task.filter(task => task.id !== id))
  }
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <label>
          <TaskInput 
            value={taskInput}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setTaskInput(event.target.value)}
          />
          <button onClick={handleCreateTask}>
            Criar
            <PlusCircle size={22}/>
        </button>
        </label>
        
        <header className={styles.taskHeader}>
          <p className={styles.createdTasks}>Tarefas criadas <span>{tasks.length}</span></p>
          <p className={styles.completedTasks}>Concluídas <span>{}</span> de <span>{tasks.length}</span></p>
        </header>
        {tasks.length > 0 ? tasks.map(task => <Task key={task.id} task={task} handleDelete={deleteTask} />): <EmptyList />}
      </div>
    </>
  )
}

export default App
