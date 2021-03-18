/**
 * isEmptyObject
 * Returns true if an object is empty (eg {})
 * @param obj
 * @returns {boolean}
 */
export const isEmptyObject = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;

export const strToDate = (item, el) => {
  if(typeof(el) === 'object') {
    let key;
    for(key of el) {
      item[key] = Date.parse(item[key]);
    }
  }
  else {
    item[el] = Date.parse(item[el]);
  }
  return item;
}
