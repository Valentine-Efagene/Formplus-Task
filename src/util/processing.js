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
  return (name === null || name === '') ? data : data.filter((record) => record.name.toLowerCase() === name.toLowerCase())
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
      return (a.created < b.created) ? -1 : ((a.created > b.created) ? 1 : 0)
    } else {
      return (a.created > b.created) ? -1 : ((a.created < b.created) ? 1 : 0)
    }
  });
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
      return (a.category[0] > b.category[0]) ? 1 : ((a.category[0] < b.category[0]) ? -1 : 0)
    });
  } else {
    return dataToSort.sort((a, b) => {
      return (b.category[0] > a.category[0]) ? 1 : ((b.category[0] < a.category[0]) ? -1 : 0)
    });
  }
}