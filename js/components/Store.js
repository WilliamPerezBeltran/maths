import { createStore } from 'redux'

const reducer = (state, action) => {
  if (action.type === 'william') {
    return {
      ...state,
      tag: state.tag.concat(x)
    }
  }

  return state
}

export default createStore(reducer, { tag: [] })
