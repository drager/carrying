import {curryN} from './curryN'

export const curry = (fn: Function) => curryN(fn.length)(fn)
