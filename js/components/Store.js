import { createStore } from 'redux'

const reducer = (state, action) => {
  if (action.type === 'selectDigit') {
    return {
      ...state,
      digit: action.digit
    }
  } else if (action.type === 'getAgetBgetResult') {
    return {
      ...state,
      a: action.a,
      b: action.b,
      result: action.result.toString()
    }
  } else if (action.type === 'clearState') {
    return {
      ...state,
      voiceResult: action.voiceResult
    }
  } else if (action.type === 'voiceResult') {
    return {
      ...state,
      voiceResult: action.voiceResult[0]
    }
  }

  return state
}

export default createStore(reducer, {
  tag: [],
  digit: null,
  a: '?',
  b: '?',
  result: '',
  voiceResult: ''
})
