import React from 'react'
import styles from './SearchBar.module.css'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../redux/slice/dataSlice'
import { useRef } from 'react'
import searchIcon from './searchIcon.svg'

const SearchBar = () => {
  const dispatch = useDispatch()
  const searchInputRef = useRef()

  const handleSearch = () => {
    try {
      dispatch(setSearch(searchInputRef.current.value))
    } catch (e) {
      console.log(e.message)
    }
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <span className={styles.searchBar}>
      <input
        ref={searchInputRef}
        onKeyDown={onKeyDown}
        type="text"
        name="search"
        id="search"
        className={styles.searchInput}
        placeholder="Search Templates"
      />
      <button className={styles.searchButton} onClick={handleSearch}>
        <img className={styles.searchIcon} src={searchIcon} alt="alt" />
      </button>
    </span>
  )
}

export default SearchBar
