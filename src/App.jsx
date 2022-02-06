import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './App.module.css'
import Grid from './components/Grid/Grid'
import Paginator from './components/Paginator/Paginator'
import ToolBar from './components/ToolBar/ToolBar'
import {
  filterByCategory,
  searchName,
  sortByDate,
  sortByOrder,
} from './util/processing'
import { fetch as fetchData } from './redux/slice/dataSlice'
import Info from './components/Info/Info'

function App() {
  const NUMBER_PER_PAGE = 16
  const dispatch = useDispatch()
  const { data, page, category, date, order, search } = useSelector(
    (state) => state.data
  )

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

  let filteredData = filterByCategory(category, data)
  filteredData = sortByOrder(filteredData, order)
  filteredData = sortByDate(filteredData, date)
  filteredData = search ? searchName(search, filteredData) : filteredData

  return (
    <div className={styles.app}>
      <ToolBar />
      <Info
        text="Tada! Get started with a free template. Can't find what you are looking for? Search from the 1000+ available templates"
        icon={<i className="fas fa-info-circle"></i>}
      />
      <div className={styles.category}>{category} Templates</div>
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
