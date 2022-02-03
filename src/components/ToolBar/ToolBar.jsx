import React, { useState } from 'react'
import styles from './ToolBar.module.css'
import SearchBar from '../SearchBar/SearchBar'
import Select from '../Select/Select'

const ToolBar = () => {
  const [category, setCategory] = useState('')
  const [order, setOrder] = useState('')
  const [date, setDate] = useState('')

  return (
    <div className={styles.toolBar}>
      <SearchBar className={styles.left} />
      <div className={styles.right}>
        <span className={styles.sortLabel}>Sort By: </span>
        <div className={styles.filters}>
          <Select
            defaultIndex={0}
            options={['health', 'education', 'media']}
            setter={setCategory}
          ></Select>
          <Select
            defaultIndex={0}
            options={['All', 'some', 'few']}
            setter={setOrder}
          ></Select>
          <Select
            defaultIndex={0}
            options={['01/03/2022', '01/03/2022', '01/03/2022']}
            setter={setDate}
          ></Select>
        </div>
      </div>
    </div>
  )
}

export default ToolBar
