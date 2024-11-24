import { useState } from 'react';
import { EmptyList } from './EmptyList';
import { Task, TaskType } from './Task'
import styles from './TaskList.module.css'
interface TaskListProps {
  taskList: TaskType[];
  taskCount: number;
}
export const TaskList = ({taskList,taskCount}: TaskListProps) => {
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  return (
    <main className={styles.tasklist}>
        <header>
            <p className={styles.createdTasks}>Tarefas criadas <span>{taskCount}</span></p>
            <p className={styles.completedTasks}>Concluídas <span>{completedTaskCount}</span></p>
        </header>
        {taskList.length > 0 ? (
          taskList.map(task => <Task key={task.id} task={task} completedTaskCount={completedTaskCount} setCompletedTaskCount={setCompletedTaskCount}/>)
          ) : (
           <EmptyList />
          )
        }
    </main>
  )
}
