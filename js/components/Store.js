import { createStore } from 'redux'

const reducer = (state, action) => {
  if (action.type === 'selectDigit') {
    return {
      ...state,
      digit: action.digit
    }
  } else if (action.type === 'getAgetBgetResult') {
    console.log('SSTORE')
    console.log(action.a)
    console.log(action.b)
    console.log(action.result)
    return {
      ...state,
      a: action.a,
      b: action.b,
      result: action.result
    }
  }

  return state
}

export default createStore(reducer, { tag: [], digit: null, a: null, b: null, result: null })
