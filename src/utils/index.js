import {Nothing, Just, maybe } from "sanctuary"

export function uncurry2(f) {
  return function (a, b) {
    if (arguments.length !== 2) throw new Error("Incorrect number of arguments") // eslint-disable-line
    return f(a)(b)
  }
}

export function uncurry3(f) {
  return function (a, b, c) {
    if (arguments.length !== 3) throw new Error('Incorrect number of arguments') // eslint-disable-line
    return f(a)(b)(c)
  }
}

export function findWithIndex(predicate, collection) {
  return collection.reduce((acc, target, index) => {
    if (acc.isJust) return acc

    if (predicate(target) === true) {
      return Just({ target, index })
    }

    return acc
  }, Nothing)
}


export const maybe3 = uncurry3(maybe)
