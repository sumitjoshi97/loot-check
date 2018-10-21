import * as actionTypes from '../actions/actionTypes'
import { read_cookie, bake_cookie } from 'sfcookies'

const BALANCE_COOKIE = 'BALANCE_COOKIE'

const initialState = {
  balance: 0
}

export default (state = initialState, action) => {
  let balance

  switch (action.type) {
    case actionTypes.SET_BALANCE:
      balance = action.balance
      break

    case actionTypes.DEPOSIT:
      balance = state.balance + action.deposit
      break

    case actionTypes.WITHDRAW:
      balance = state.balance - action.withdraw
      break

    default:
      balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state.balance
  }

  bake_cookie(BALANCE_COOKIE, balance)

  return { ...state, balance }
}
