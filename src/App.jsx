import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './App.module.css'
import Grid from './components/Grid/Grid'
import Paginator from './components/Paginator/Paginator'
import ToolBar from './components/ToolBar/ToolBar'
import { filterByCategory, sortByDate, sortByOrder } from './util/processing'
import { fetch as fetchData } from './redux/slice/dataSlice'

function App() {
  const dispatch = useDispatch()
  const { data, page, category, date, order } = useSelector(
    (state) => state.data
  )

  let filteredData = filterByCategory(category, data)
  filteredData = sortByOrder(filteredData, order)

  if (date === 'YES') {
    filteredData = sortByDate(filteredData)
  }

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    try {
      dispatch(fetchData())
    } catch (error) {
      console.log(error.message)
    }
  }

  const NUMBER_PER_PAGE = 16

  return (
    <div className={styles.app}>
      <ToolBar />
      <Grid
        data={filteredData.slice(
          (page - 1) * NUMBER_PER_PAGE,
          filteredData.length >= page * NUMBER_PER_PAGE
            ? page * NUMBER_PER_PAGE
            : filteredData.length
        )}
      ></Grid>
      <Paginator length={filteredData.length} currentPage={page} />
    </div>
  )
}

export default App
