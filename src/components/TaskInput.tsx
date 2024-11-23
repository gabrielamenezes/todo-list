import { PlusCircle } from '@phosphor-icons/react'
import { v4 as uuidv4 } from 'uuid';
import styles from './TaskInput.module.css'
import { ChangeEvent} from 'react';
import { TaskType } from './Task';

interface TaskInputProps {
  taskInput: string;
  taskList: TaskType[];
  taskCount: number;
  setTaskCount: (value: number) => void;
  setTaskList: (task: TaskType[]) => void;
  setTaskInput: (value: string) => void;
}
export const TaskInput = ({taskInput, setTaskList, taskList, setTaskInput, taskCount, setTaskCount} : TaskInputProps) => {

  function handleCreateTaskInputChange(event: ChangeEvent<HTMLInputElement>) {
    const newTask = event.target.value;
    setTaskInput(newTask)
  }

  function handleCreateNewTask() {
    setTaskList([...taskList, {id: uuidv4(), name: taskInput, completed: false}])
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
