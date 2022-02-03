import React, { useState } from 'react'
import styles from './SearchBar.module.css'

const SearchBar = () => {
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
      <i className={`fa fa-search ${styles.SearchIcon}`}></i>
    </span>
  )
}

export default SearchBar
