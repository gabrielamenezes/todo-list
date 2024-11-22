import { PlusCircle } from '@phosphor-icons/react'
import styles from './TaskInput.module.css'
export const TaskInput = () => {
  return (
    <label className={styles.taskInput}>
        <input type="text" placeholder='Adicione uma nova tarefa' />
        <button>
            Criar
            <PlusCircle size={22}/>
        </button>
    </label>
  )
}
