import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

export interface TaskType {
  id: string,
  name: string;
  completed: boolean;
}
interface TaskProps {
    task: TaskType;
    completedTaskCount: number;
    setCompletedTaskCount: (value: number) => void;
}
export const Task = ({task, completedTaskCount, setCompletedTaskCount}: TaskProps) => {
  function handleCompleteTask() {
    setCompletedTaskCount(completedTaskCount + 1)
  }
    return (
        <div className={styles.task}>
          <div>
            <label htmlFor="checkbox" onClick={handleCompleteTask}>
              <input readOnly type="checkbox" />
              <span className={`${styles.checkbox}`}>
              </span>
    
              <p className={`${styles.paragraph}`}>
                {task.name}
              </p>
            </label>
          </div>
    
          <button>
            <Trash size={16} color="#808080" />
          </button>
        </div>
      )
}
