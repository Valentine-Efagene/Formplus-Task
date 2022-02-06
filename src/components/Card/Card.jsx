import React from 'react'
import styles from './Card.module.css'
import { object } from 'prop-types'

const Card = ({ data }) => {
  const { description, link, name } = data
  return (
    <div className={styles.card}>
      <div className={styles.name}>{name} Template</div>
      <div className={styles.description}>{description}</div>
      <a className={styles.link} href={link}>
        Use Template
      </a>
    </div>
  )
}

Card.propTypes = { data: object }

export default Card
