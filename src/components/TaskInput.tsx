import styles from './TaskInput.module.css'
import { ChangeEvent} from 'react';

interface TaskInputProps {
  taskInput: string;
  setTaskInput: (value: string) => void;
}
export const TaskInput = ({taskInput, setTaskInput} : TaskInputProps) => {

  function handleCreateTaskInputChange(event: ChangeEvent<HTMLInputElement>) {
    const newTask = event.target.value;
    setTaskInput(newTask)
  }

 
  return (
      <input className={styles.input} type="text" placeholder='Adicione uma nova tarefa' value={taskInput} onChange={(event) => handleCreateTaskInputChange(event)}/>

  )
}
