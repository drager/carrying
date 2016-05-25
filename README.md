# Carrying
[![Build Status](https://travis-ci.org/drager/carrying.svg?branch=master)](https://travis-ci.org/drager/carrying)

A functional JavaScript library that carries you towards happier and better code.

## Why?
Because JavaScript (as is at the moment) lacks some great functions built into the language.
A lot of other languages provides similar functions that this library provides.
Mainly functional languages, which this library has taken it's inspiration from. So this is simply a
functional JavaScript library which provides some useful functions that JavaScript currently lacks.

## Installation
```
npm install --save carrying
```

## Usage
Just import the functions you want to use:

```js
import {concat, intersperse, uncons, range, transpose} from 'carrying'

uncons(range(1, 11)) // => [[1], [2, 3, 4, 5, 6, 7, 8, 9, 10]]
uncons([1, 2, 3]) //=> [[1], [2, 3]]
uncons([]) //=> undefined

uncons('abc') //=> [['a'], ['b', 'c']]
uncons('ze') // => [['z'], ['e']]
uncons('q') // => ['q']
uncons('') //=> undefined

range(1, 3) // => [1, 2]
range(5, 11) // => [5, 6, 7, 8, 9, 10]

range(10, 9) // => []
range(2, 2) // => []

range(1, 10, 2) // => [1, 3, 5, 7, 9]

transpose([[1, 2, 3], [4, 5, 6]]) // => [[1, 4], [2, 5], [3, 6]]
transpose([[10, 11], [20], [], [30, 31, 32]]) // => [[10, 20, 30], [11, 31], [32]]

concat(intersperse(' ', ['intersperse', 'is', 'a', 'fun', 'function', '!'])) // => 'intersperse is a fun function !'
```

## Documentation
Documentation is available online at: http://drager.github.io/carrying/
