export const curryN = (n: number) => (fn: Function, ...args) =>
  function curried(...args) {
    return args.length >= fn.length
      ? fn.call(this, ...args)
      : (...rest) => curried.call(this, ...args, ...rest)
  }
