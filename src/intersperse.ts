/**
 * Takes an element and a list and intersperses that element
 * between the elements of the list
 *
 * @since v0.1.0
 * @param {any} element - The element to intersperse
 * @param {Array} list - The array
 * @return {Array} - An intersperses list
 * @example
 *   intersperse(',', 'abcde')) // => 'a,b,c,d,e'
 *
 *   intersperse(' ', ['intersperse', 'is', 'a', 'fun', 'function', '!']) // => ['intersperse', ' ', 'is', ' ', 'a', ' ',  'fun', ' ',  'function', ' ',  '!']
 */
export function intersperse(element: any, list: any[]|string): any {
  if (list.length === 0) return undefined

  let results

  if (typeof list === 'string') {
    results = ''
    for (let i = 0; i < list.length; i++) {
      results += i === list.length - 1
        ? list[i]
        : `${list[i]}${element}`
    }
  } else {
    results = []

    for (let i = 0; i < list.length; i++) {
      i === list.length - 1
        ? results.push(list[i])
        : results.push(list[i], element)
    }
  }

  return results
}
