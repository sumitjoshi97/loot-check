import {FETCH_BITCOIN} from '../actions/actionTypes'

const initialState = {
  bitcoin: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_BITCOIN: 
      return {...state, bitcoin: action.bitcoin}

    default:
      return state
  }
}