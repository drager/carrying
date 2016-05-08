import {curry} from './curry'

export const range = (start: number, stop: number, step?: number) =>
  step
    ? iterate(start, stop, step)([])
    : iterate(start, stop, 1)([])

const iterate = curry((start, stop, step, list) => {
  const newList = [...list]
  for (let i = start; i < stop; i +=step) {
    newList.push(i)
  }
  return newList
})
