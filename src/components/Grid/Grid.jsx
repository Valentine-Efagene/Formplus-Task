import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Grid.module.css'
import Card from '../Card/Card'
import { array } from 'prop-types'

const Grid = ({ data }) => {
  const { category } = useSelector((state) => state.data)

  return (
    <div className={styles.grid}>
      {data.map((d, index) => {
        return <Card key={index} data={d} currentCategory={category}></Card>
      })}
    </div>
  )
}

Grid.propTypes = { data: array }

export default Grid
