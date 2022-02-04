import { number } from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Paginator.module.css'
import { setPage } from '../../redux/slice/dataSlice'

const Paginator = ({ currentPage, length }) => {
  const dispatch = useDispatch()
  const ref = useRef()
  //const { page } = useSelector((state) => state.data)
  const pages = Math.ceil(length / 15)

  const onChange = (e) => {
    try {
      const _page = parseInt(e.target.value)
      setNewPage(_page)
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleKeyDown = (e) => {
    try {
      if (e.key === 'Enter') {
        const _page = parseInt(e.target.value)
        dispatch(setPage(_page))
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  // range = [15 x (p - 1) + 1, 15 x p]

  return (
    <div className={styles.paginator}>
      <button
        onClick={() => {
          dispatch(setPage(currentPage - 1))
          ref.current.value = currentPage - 1
        }}
        className={styles.previous}
        disabled={currentPage == 1}
      >
        {currentPage > 1 && <i className="fas fa-angle-left"></i>} Previous
      </button>
      <span className={styles.middle}>
        <input
          ref={ref}
          placeholder={currentPage}
          type="text"
          onKeyDown={handleKeyDown}
          className={styles.currentPage}
        />{' '}
        of <span>{pages}</span>
      </span>
      <button
        className={styles.next}
        onClick={() => {
          dispatch(setPage(currentPage + 1))
          ref.current.value = currentPage + 1
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
