import { array, func, number, string } from 'prop-types'
import React from 'react'
import styles from './Select.module.css'
import { useDispatch } from 'react-redux'

const Select = ({ defaultIndex, options, setter, title }) => {
  const dispatch = useDispatch()
  return (
    <span>
      <select
        required
        className={styles.select}
        onChange={(e) => dispatch(setter(e.target.value))}
      >
        {options.map((_option, index) => {
          return (
            <option
              key={index}
              value={_option}
              defaultValue={options[defaultIndex]}
            >
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
  defaultIndex: number,
  options: array,
  setter: func,
  title: string,
}

export default Select
