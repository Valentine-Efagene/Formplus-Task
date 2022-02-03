import React, { useState } from 'react'
import styles from './SearchBar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetch } from '../../redux/slice/dataSlice'

const SearchBar = () => {
  const dispatch = useDispatch()
  const { category } = useSelector((state) => state.data)
  const { date } = useSelector((state) => state.data)
  const [data, setData] = useState([])
  const [promise, setPromise] = useState()

  const [searchText, setSearchText] = useState('')
  const MAX_LENGTH = 100

  const onBlur = () => {
    if (searchText.length > MAX_LENGTH) {
      setSearchText(searchText.slice(0, MAX_LENGTH))
    }
  }

  const onChange = (e) => {
    setSearchText(
      searchText.length <= MAX_LENGTH
        ? e.target.value
        : e.target.value.slice(0, MAX_LENGTH)
    )
  }

  const search = async () => {
    try {
      dispatch(fetch({ category }))
    } catch (e) {
      //dispatch(setAlert(e.message))
      console.log(e.message)
    }
  }

  return (
    <span className={styles.searchBar}>
      <input
        onBlur={onBlur}
        onChange={onChange}
        value={searchText}
        type="text"
        name="search"
        id="search"
        className={styles.searchInput}
        placeholder="search"
      />
      <button className={styles.searchButton} onClick={search}>
        <i className={`fa fa-search ${styles.SearchIcon}`}></i>
      </button>
    </span>
  )
}

export default SearchBar
