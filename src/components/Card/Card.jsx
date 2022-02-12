import React from 'react'
import styles from './Card.module.css'
import { string, shape } from 'prop-types'
import { removeTrailingPunctuation, toTitleCase } from '../../util/processing'

const Card = ({ data }) => {
  const { description, link, name } = data
  return (
    <div className={styles.card}>
      <div className={styles.name}>
        {removeTrailingPunctuation(toTitleCase(name))} Template
      </div>
      <div className={styles.description}>{description}</div>
      <a className={styles.link} href={link}>
        Use Template
      </a>
    </div>
  )
}

Card.propTypes = {
  data: shape({
    description: string,
    link: string,
    name: string,
  }),
}

export default Card
