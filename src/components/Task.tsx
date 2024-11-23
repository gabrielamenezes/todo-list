import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

export interface TaskType {
  id: string,
  name: string;
  completed: boolean;
}
interface TaskProps {
    task: TaskType;
}
export const Task = ({task}: TaskProps) => {
    return (
        <div className={styles.task}>
          <div>
            <label htmlFor="checkbox">
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
