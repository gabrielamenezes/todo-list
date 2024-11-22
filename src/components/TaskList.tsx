import styles from './TaskList.module.css'
export const TaskList = () => {
  return (
    <main className={styles.tasklist}>
        <header>
            <p>Tarefas criadas <span>0</span></p>
            <p>Concluídas <span>0</span></p>
        </header>
    </main>
  )
}
