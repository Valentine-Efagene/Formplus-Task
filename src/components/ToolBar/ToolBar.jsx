import React from 'react'
import styles from './ToolBar.module.css'
import SearchBar from '../SearchBar/SearchBar'
import Select from '../Select/Select'
import { useSelector } from 'react-redux'
import { setCategory } from '../../redux/slice/dataSlice'
import { setDate } from '../../redux/slice/dataSlice'
import { setOrder } from '../../redux/slice/dataSlice'
import { ALL, EDUCATION, E_COMMERCE, HEALTH } from '../../model/categories'
import { ASCENDING, DESCENDING, DEFAULT } from '../../model/order'

const ToolBar = () => {
  const categories = [ALL, HEALTH, E_COMMERCE, EDUCATION]
  const dates = [DEFAULT, ASCENDING, DESCENDING]
  const orders = [DEFAULT, ASCENDING, DESCENDING]
  const { category, date, order } = useSelector((state) => state.data)

  return (
    <div className={styles.toolBar}>
      <SearchBar className={styles.left} />
      <div className={styles.right}>
        <span className={styles.sortLabel}>Sort By: </span>
        <div className={styles.filters}>
          <Select
            title="Category"
            defaultValue={category}
            options={categories}
            setter={setCategory}
          ></Select>
          <Select
            title="Order"
            defaultValue={order}
            options={orders}
            setter={setOrder}
          ></Select>
          <Select
            title="Date"
            defaultValue={date}
            options={dates}
            setter={setDate}
          ></Select>
        </div>
      </div>
    </div>
  )
}

export default ToolBar
