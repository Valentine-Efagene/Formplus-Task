import React from 'react'
import { useSelector } from 'react-redux'
import styles from './App.module.css'
import Grid from './components/Grid/Grid'
import ToolBar from './components/ToolBar/ToolBar'

function App() {
  const { data } = useSelector((state) => state.data)

  return (
    <div className={styles.app}>
      <ToolBar />
      <Grid data={data}></Grid>
    </div>
  )
}

export default App
