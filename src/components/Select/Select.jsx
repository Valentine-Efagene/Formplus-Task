import { arrayOf, func, string } from 'prop-types'
import React from 'react'
import styles from './Select.module.css'
import { useDispatch } from 'react-redux'

const Select = ({ defaultValue, options, setter, title }) => {
  const dispatch = useDispatch()
  return (
    <span>
      <select
        required
        className={styles.select}
        value={defaultValue}
        onChange={(e) => dispatch(setter(e.target.value))}
      >
        {options.map((_option, index) => {
          return (
            <option key={index} value={_option}>
              {_option}
            </option>
          )
        })}
      </select>
      <span className={styles.title}>{title}</span>
    </span>
  )
}

Select.propTypes = {
  defaultValue: string,
  options: arrayOf(string),
  setter: func,
  title: string,
}

export default Select
