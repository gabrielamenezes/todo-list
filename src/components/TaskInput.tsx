import { PlusCircle } from '@phosphor-icons/react'
import styles from './TaskInput.module.css'
import { ChangeEvent} from 'react';

interface TaskInputProps {
  taskInput: string;
  taskList: string[];
  taskCount: number;
  setTaskCount: (value: number) => void;
  setTaskList: (task: string[]) => void;
  setTaskInput: (value: string) => void;
}
export const TaskInput = ({taskInput, setTaskList, taskList, setTaskInput, taskCount, setTaskCount} : TaskInputProps) => {

  function handleCreateTaskInputChange(event: ChangeEvent<HTMLInputElement>) {
    const newTask = event.target.value;
    setTaskInput(newTask)
  }

  function handleCreateNewTask() {
    setTaskList([...taskList, taskInput])
    setTaskCount(taskCount + 1)
    setTaskInput('');
  }
  return (
    <label className={styles.taskInput}>
        <input type="text" placeholder='Adicione uma nova tarefa' value={taskInput} onChange={(event) => handleCreateTaskInputChange(event)}/>
        <button onClick={handleCreateNewTask}>
            Criar
            <PlusCircle size={22}/>
        </button>
    </label>
  )
}
