import { any, string } from 'prop-types'
import React from 'react'
import styles from './Info.module.css'

const Info = ({ text, icon }) => {
  return (
    <div className={styles.info}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>{text}</span>
    </div>
  )
}

Info.propTypes = {
  icon: any,
  text: string,
}

export default Info
