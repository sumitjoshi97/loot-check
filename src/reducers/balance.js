import * as actionTypes from '../actions/actionTypes'

const initialState = {
  balance: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BALANCE:
      return { ...state, balance: action.balance }

    default:
      return state
  }
}
