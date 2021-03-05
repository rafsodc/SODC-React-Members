export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const addElement = (oldArray, element) => {
  let arr = [...oldArray];
  arr.push(element);
  return arr;
}

export const removeElementByIndex = (oldArray, index) => {
  return [...oldArray].splice(index, 1);
}

export const removeElementByValue = (oldArray, value) => {
  return [...oldArray].filter(el => (el !== value));
}