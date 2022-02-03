import React from 'react'
import styles from './Grid.module.css'
import Card from '../Card/Card'
import { array } from 'prop-types'

const Grid = ({ data }) => {
  return (
    <div className={styles.grid}>
      {data.map((d, index) => {
        return <Card key={index} data={d}></Card>
      })}
    </div>
  )
}

Grid.propTypes = { data: array }

export default Grid
