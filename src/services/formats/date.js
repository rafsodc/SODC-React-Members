
const longDate = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "short"
});

export {longDate};