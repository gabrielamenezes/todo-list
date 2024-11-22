import styles from './App.module.css'
import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'

import './global.css'

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <TaskInput />
      </div>
    </>
  )
}

export default App
