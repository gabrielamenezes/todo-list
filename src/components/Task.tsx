import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { TaskType } from '../App';


interface TaskProps {
    task: TaskType;
    handleDelete: (id: string) => void;
}
export const Task = ({task, handleDelete}: TaskProps) => {
    function handleTaskToggle() {

    }
   
    return (
        <div className={styles.task}>
          <div>
            <label htmlFor="checkbox" onClick={handleTaskToggle}>
              <input readOnly type="checkbox" />
              <span className={`${styles.checkbox}`}>
              </span>
    
              <p className={`${styles.paragraph}`}>
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
