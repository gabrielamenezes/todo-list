import { Task } from './Task'
import styles from './TaskList.module.css'
export const TaskList = () => {
  return (
    <main className={styles.tasklist}>
        <header>
            <p className={styles.createdTasks}>Tarefas criadas <span>0</span></p>
            <p className={styles.completedTasks}>Concluídas <span>0</span></p>
        </header>
        <Task />
    </main>
  )
}
