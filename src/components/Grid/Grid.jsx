import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Grid.module.css'
import Card from '../Card/Card'
import { array } from 'prop-types'

const Grid = ({ data }) => {
  const { category, date, order } = useSelector((state) => state.data)
  //const _data = data.filter((record) => record.category.includes(category))

  return (
    <div className={styles.grid}>
      {category}
      <br />
      {order}
      <br />
      {date}
      {data.map((d, index) => {
        return <Card key={index} data={d}></Card>
      })}
    </div>
  )
}

Grid.propTypes = { data: array }

export default Grid
