import React from 'react'
import styles from './Grid.module.css'
import Card from '../Card/Card'
import { shape, arrayOf, string } from 'prop-types'

const Grid = ({ data }) => {
  return (
    <div className={styles.grid}>
      {data.map((datum, index) => {
        return <Card key={index} data={datum}></Card>
      })}
    </div>
  )
}

Grid.propTypes = {
  data: arrayOf(
    shape({
      category: arrayOf(string),
      created: string,
      description: string,
      link: string,
      name: string,
    })
  ),
}

export default Grid
