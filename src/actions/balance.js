import * as actionTypes from './actionTypes'

export const setBalance = balance => ({
  type: actionTypes.SET_BALANCE,
  balance
})

export const deposit = deposit => ({
  type: actionTypes.DEPOSIT,
  deposit
})

export const withdraw = withdraw => ({
  type: actionTypes.WITHDRAW,
  withdraw
})