import {curry} from './curry'

export const iterate = curry((start, stop, step, list) => {
  const newList = [...list]
  for (let i = start; i < stop; i += step) {
    newList.push(i)
  }
  return newList
})
