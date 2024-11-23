import { EmptyList } from './EmptyList';
import { Task, TaskType } from './Task'
import styles from './TaskList.module.css'
interface TaskListProps {
  taskList: TaskType[];
  taskCount: number;
}
export const TaskList = ({taskList,taskCount}: TaskListProps) => {
  return (
    <main className={styles.tasklist}>
        <header>
            <p className={styles.createdTasks}>Tarefas criadas <span>{taskCount}</span></p>
            <p className={styles.completedTasks}>Concluídas <span>0</span></p>
        </header>
        {taskList.length > 0 ? (
          taskList.map(task => <Task key={task.id} task={task}/>)
          ) : (
           <EmptyList />
          )
        }
    </main>
  )
}
