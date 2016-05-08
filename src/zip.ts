export const zip = (left: any[], right: any[], combinerFunction?: Function): any[] => {
  const results = []

  for (let i = 0; i < Math.min(left.length, right.length); i += 1) {
    combinerFunction
      ? results.push([combinerFunction(left[i], right[i])])
      : results.push([left[i], right[i]])
  }

  return results
}
