import React from 'react'
import { useSelector } from 'react-redux'
import styles from './App.module.css'
import Grid from './components/Grid/Grid'
import Paginator from './components/Paginator/Paginator'
import ToolBar from './components/ToolBar/ToolBar'

function App() {
  const { data, page } = useSelector((state) => state.data)

  return (
    <div className={styles.app}>
      <ToolBar />
      <Grid
        data={data.slice(
          (page - 1) * 15,
          data.length >= page * 15 ? page * 15 : data.length
        )}
      ></Grid>
      <Paginator length={data.length} currentPage={page} />
    </div>
  )
}

export default App
