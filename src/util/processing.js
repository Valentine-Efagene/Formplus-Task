import { ALL } from "../model/categories"
import { ASCENDING, DEFAULT } from "../model/order"

/**
 * 
 * @param {string} category 
 * @param {array} data 
 * @returns array
 */
export const filterByCategory = (category, data) => {
  return category === ALL
    ? data
    : data.filter((record) => record.category.includes(category))
}

/**
 * 
 * @param {string} name 
 * @param {array} data 
 * @returns array
 */
export const searchName = (name, data) => {
  return (name === null || name === '') ? data : data.filter((record) => record.name.toLowerCase().includes(name.toLowerCase()))
}

/**
 * 
 * @param {array} data 
 * @returns array
 */
export const sortByDate = (data, order) => {
  if (order === DEFAULT) {
    return data
  }

  const dataToSort = [...data]


  return dataToSort.sort((a, b) => {
    if (order === ASCENDING) {
      return new Date(a.created) - new Date(b.created)
    } else {
      return new Date(b.created) - new Date(a.created)
    }
  });
}

/**
 * 
 * @param {string} str 
 * @returns string
 */
export const toTitleCase = (str) => {
  const words = str.split(' ')

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    words[i] = word.charAt(0).toUpperCase() + (word.length > 1 ? word.slice(1).toLowerCase() : '')
  }

  return words.join(' ')
}

export const removeTrailingPunctuation = (str) => {
  return str.replace(/[.,]$/, '')
}

/**
 * 
 * @param {array} data 
 * @param {string} order 
 * @returns array
 */
export const sortByOrder = (data, order) => {
  if (data.length == 0 || order === DEFAULT) return data
  // https://flutterq.com/typeerror-cannot-assign-to-read-only-property-0-of-object-object-array/
  const dataToSort = [...data]

  if (order === ASCENDING) {
    return dataToSort.sort((a, b) => {
      return (a.name > b.name) ? 1 : ((a.name < b.name) ? -1 : 0)
    });
  } else {
    return dataToSort.sort((a, b) => {
      return (b.name > a.name) ? 1 : ((b.name < a.name) ? -1 : 0)
    });
  }
}