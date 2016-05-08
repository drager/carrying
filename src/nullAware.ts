/*
* Checks whenever a value is null or undefined and if it is, then it replaces
* the null value it with a given replaceValue. If the value is not null
* or undefined it will just return the supposed to be null value, that is the
* first parameter.
*/
export const nullAware = (value: any, replaceValue: any): any =>
  (value === null || typeof value === 'undefined')
    ? replaceValue
    : value
