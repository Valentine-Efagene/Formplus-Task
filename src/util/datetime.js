/**
 * Convert an ISO date string to 'Date (Time)'
 * @param {string} isoString 
 * @returns string
 */
export function toDateTime(isoString) {
  const dateTime = new Date(isoString)
  const date = dateTime.toDateString()
  const time = dateTime.toLocaleTimeString('en',
    { timeStyle: 'short', hour12: false, timeZone: 'UTC' });
  return `${date} (${time})`
}
