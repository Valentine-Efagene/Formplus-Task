export function toDateTime(isoString) {
  const dateTime = new Date(isoString)
  const date = dateTime.toDateString()
  const time = dateTime.toLocaleTimeString('en',
    { timeStyle: 'short', hour12: false, timeZone: 'UTC' });
  return `${date} (${time})`
}
