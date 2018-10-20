import balanceReducer from './balance'

import * as actionTypes from '../actions/actionTypes'

describe('balance Reducer', () => {
  const balance = 5
  it('sets a balance', () => {
    const balanceData = {
      type: actionTypes.SET_BALANCE,
      balance
    }
    expect(balanceReducer(undefined, balanceData)).toEqual({ balance })
  })

  it('deposits into balance', () => {
    const initialState = {
      balance
    }
    const deposit = 10
    const depositData = {
      type: actionTypes.DEPOSIT,
      deposit
    }

    const expectedState = {
      balance: initialState.balance + deposit
    }

    expect(balanceReducer(initialState, depositData)).toEqual(expectedState)
  })

  it('withdraws from balance', () => {
    const initialState = {
      balance
    }

    const withdraw = 5
    const actionData = {
      type: actionTypes.WITHDRAW,
      withdraw
    }

    const expectedState = {
      balance: initialState.balance - withdraw
    }

    expect(balanceReducer(initialState, actionData)).toEqual(expectedState)
  })
})
