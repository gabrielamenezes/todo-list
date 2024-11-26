import styles from './TaskInput.module.css'


export const TaskInput = ({...rest} : React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement>) => {

  return (
      <input className={styles.input} type="text" placeholder='Adicione uma nova tarefa' {...rest} />

  )
}
