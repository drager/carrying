/**
 * Checks whenever a value is null or undefined and if it is, then it replaces
 * the null value it with a given replaceValue. If the value is not null
 * or undefined it will just return the supposed to be null value, that is the
 * first parameter.
 *
 * @since v0.1.0
 * @param {any} value - The value to be checked
 * @param {any} replaceValue - The value that should be returned if the first
 * param is null or undefined
 * @return {any} Either value or replaceValue
 * @example
 *   let x = null
 *   x = nullAware(x, 'are null-aware, friendly to') // => 'are null-aware, friendly to'
 */
export function nullAware(value: any, replaceValue: any): any {
  return (value === null || typeof value === 'undefined')
    ? replaceValue
    : value
}
