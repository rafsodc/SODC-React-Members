const longDate = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'short'
})

const time = new Intl.DateTimeFormat('en-GB', {
  timeStyle: 'short'
})

export { longDate, time }