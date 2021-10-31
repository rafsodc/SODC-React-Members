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

/**
 * Returns true if the route contains a role that is in userRoles
 * @param {obj} route 
 * @param {[string]} userRoles 
 * @returns {boolean}
 */
export const accessByRole = (route, userRoles) => {
  return route.roles.filter(role => userRoles.includes(role)).length > 0;
}

export const linkByRole = (route, userRoles) => {
  return route.forceLink ? true: accessByRole(route, userRoles);
}

export const boolToStr = (input) => {
  return input ? "Yes" : "No"
}

export const floatToCur = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });