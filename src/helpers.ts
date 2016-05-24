import {curry} from './curry'

/**
 * Helper function that helps to iterate over an list
 * with a given start, stop and step.
 */
export const iterate = curry((start, stop, step, list) => {
  const newList = [...list]
  for (let i = start; i < stop; i += step) {
    newList.push(i)
  }
  return newList
})
