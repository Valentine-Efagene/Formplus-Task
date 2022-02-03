import React, { useState } from 'react'
import styles from './ToolBar.module.css'
import SearchBar from '../SearchBar/SearchBar'
import Select from '../Select/Select'
import { useSelector } from 'react-redux'
import { setCategory } from '../../redux/slice/dataSlice'
import { setDate } from '../../redux/slice/dataSlice'
import { setOrder } from '../../redux/slice/dataSlice'
import { ALL, EDUCATION, E_COMMERCE, HEALTH } from '../../model/categories'
import { ASCENDING, DESCENDING } from '../../model/order'

const ToolBar = () => {
  const categories = [ALL, HEALTH, E_COMMERCE, EDUCATION]
  const dates = ['NO', 'YES']
  const orders = [ASCENDING, DESCENDING]
  const { category, date, order } = useSelector((state) => state.data)

  return (
    <div className={styles.toolBar}>
      <SearchBar className={styles.left} />
      <div className={styles.right}>
        <span className={styles.sortLabel}>Sort By: </span>
        <div className={styles.filters}>
          <Select
            defaultIndex={categories.indexOf(category)}
            options={categories}
            setter={setCategory}
          ></Select>
          <Select
            defaultIndex={orders.indexOf(order)}
            options={orders}
            setter={setOrder}
          ></Select>
          <Select
            defaultIndex={dates.indexOf(date)}
            options={dates}
            setter={setDate}
          ></Select>
        </div>
      </div>
    </div>
  )
}

export default ToolBar
