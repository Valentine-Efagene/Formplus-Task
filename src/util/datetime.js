export function toDateTime(isoString) {
  const dateTime = new Date(isoString)
  const res = dateTime.toDateString()
  return res
}
