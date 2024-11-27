import { Check, Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { TaskType } from '../App';


interface TaskProps {
    task: TaskType;
    handleDelete: (id: string) => void;
    toggleTaskStatus: ({ id, value }: { id: string; value: boolean }) => void
}
export const Task = ({task, handleDelete, toggleTaskStatus}: TaskProps) => {
    function handleTaskToggle() {
      toggleTaskStatus({ id: task.id, value: !task.completed })
    }
    const checkboxCheckedClassname = task.completed
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']
  const paragraphCheckedClassname = task.completed
    ? styles['paragraph-checked']
    : ''

   
    return (
        <div className={styles.task}>
          <div>
          <label htmlFor="checkbox" onClick={handleTaskToggle}>
            <input readOnly type="checkbox" checked={task.completed} />
            <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
              {task.completed && <Check size={12} />}
            </span>

            <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
              {task.name}
            </p>
          </label>
          </div>
    
          <button onClick={() => handleDelete(task.id)} title="Deletar tarefa?">
            <Trash size={16} color="#808080"/>
          </button>
        </div>
      )
}
