import * as actionTypes from '../actions/actionTypes'

const initialState = {
  balance: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BALANCE:
      return { ...state, balance: action.balance }

    case actionTypes.DEPOSIT:
      return { ...state, balance: state.balance + action.deposit }

    case actionTypes.WITHDRAW:
      return { ...state, balance: state.balance - action.withdraw }
    
      default:
      return state
  }
}
