import { number } from 'prop-types'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Paginator.module.css'
import { setPage } from '../../redux/slice/dataSlice'

const Paginator = ({ currentPage, length }) => {
  const dispatch = useDispatch()
  const pages = Math.ceil(length / 15)
  // range = [15 x (p - 1) + 1, 15 x p]

  return (
    <div className={styles.paginator}>
      <button
        onClick={() => {
          dispatch(setPage(currentPage - 1))
        }}
        className={styles.previous}
        disabled={currentPage == 1}
      >
        {currentPage > 1 && <i className="fas fa-angle-left"></i>} Previous
      </button>
      <span className={styles.middle}>
        <input type="text" value={currentPage} className={styles.currentPage} />{' '}
        of <span>{pages}</span>
      </span>
      <button
        className={styles.next}
        onClick={() => {
          dispatch(setPage(currentPage + 1))
        }}
        disabled={currentPage == pages}
      >
        Next{' '}
        {length > 15 * currentPage && <i className="fas fa-angle-right"></i>}
      </button>
    </div>
  )
}

Paginator.propTypes = {
  currentPage: number,
  length: number,
}

export default Paginator
