import { number } from 'prop-types'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Paginator.module.css'
import { setPage } from '../../redux/slice/dataSlice'

const Paginator = ({ length }) => {
  const dispatch = useDispatch()
  const ref = useRef()
  const { page } = useSelector((state) => state.data)
  const pages = Math.ceil(length / 15)

  const handleKeyDown = (e) => {
    try {
      if (e.key === 'Enter') {
        const _page = parseInt(e.target.value)

        if (_page < 0 || _page > pages) return

        dispatch(setPage(_page))
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    if (ref?.current) {
      ref.current.value = page
    }
  }, [page])

  // range = [15 x (p - 1) + 1, 15 x p]

  return (
    <div className={styles.paginator}>
      <button
        onClick={() => {
          if (page <= 0) return

          dispatch(setPage(page - 1))
          ref.current.value = page - 1
        }}
        className={styles.previous}
        disabled={page == 1}
      >
        {page > 1 && <i className="fas fa-angle-left"></i>} Previous
      </button>
      <span className={styles.middle}>
        <input
          ref={ref}
          placeholder={page}
          type="text"
          onKeyDown={handleKeyDown}
          className={styles.currentPage}
        />{' '}
        of <span>{pages}</span>
      </span>
      <button
        className={styles.next}
        onClick={() => {
          if (page >= pages) return

          dispatch(setPage(page + 1))
          ref.current.value = page + 1
        }}
        disabled={page == pages}
      >
        Next {length > 15 * page && <i className="fas fa-angle-right"></i>}
      </button>
    </div>
  )
}

Paginator.propTypes = {
  page: number,
  length: number,
}

export default Paginator
