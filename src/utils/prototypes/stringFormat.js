export function stringFormat () {
  var args = arguments
  return this.replace(/{(\d+)}/g, function (match, number) {
    return typeof args[number] != 'undefined'
      ? args[number]
      : match

  })
}