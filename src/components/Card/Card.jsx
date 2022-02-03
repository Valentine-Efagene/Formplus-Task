import React from 'react'
import styles from './Card.module.css'
import { toDateTime } from '../../util/datetime'
import { object } from 'prop-types'

const Card = ({ data }) => {
  const { category, created, description, link, name } = data
  return (
    <div className={styles.card}>
      <div className={styles.name}>{name}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.category}>{category.join(', ')}</div>
      <div className={styles.created}>{toDateTime(created)}</div>
      <a className={styles.link} href={link}>
        Use Template
      </a>
    </div>
  )
}

Card.propTypes = { data: object }

export default Card
