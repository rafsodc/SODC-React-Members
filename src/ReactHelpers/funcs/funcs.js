import {useEffect, useRef} from "react";

/**
 * isEmptyObject
 * Returns true if an object is empty (eg {})
 * @param obj
 * @returns {boolean}
 */
export const isEmptyObject = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;

/**
 * usePrevious hook for previous props - not used, and should be in a hooks file
 * @param value
 * @returns {undefined}
 */
export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}