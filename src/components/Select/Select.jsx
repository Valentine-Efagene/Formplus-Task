import { array, func, number, string } from 'prop-types'
import React from 'react'
import styles from './Select.module.css'
import { useDispatch } from 'react-redux'

const Select = ({ defaultIndex, options, setter }) => {
  const dispatch = useDispatch()
  return (
    <select
      required
      className={styles.select}
      onChange={(e) => dispatch(setter(e.target.value))}
    >
      {options.map((_option, index) => {
        return (
          <option key={index} value={_option} selected={index === defaultIndex}>
            {_option}
          </option>
        )
      })}
    </select>
  )
}

Select.propTypes = {
  defaultIndex: number,
  options: array,
  setter: func,
}

export default Select
