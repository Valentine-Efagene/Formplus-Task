import { ALL } from "../model/categories"
import { ASCENDING } from "../model/order"

export const filterByCategory = (category, data) => {
  return category === ALL
    ? data
    : data.filter((record) => record.category.includes(category))
}

export const sortByDate = (data) => {
  const dataToSort = [...data]

  return dataToSort.sort((a, b) => {
    return (a.created < b.created) ? -1 : ((a.created > b.created) ? 1 : 0)
  });
}

export const sortByOrder = (data, order) => {
  if (data.length == 0) return data
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