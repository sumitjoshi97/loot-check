import balanceReducer from './balance'

import * as actionTypes from '../actions/actionTypes'

describe('balance Reducer', () => {
  it('sets a balance', () => {
    const balance = 10
    const balanceData = {
      type: actionTypes.SET_BALANCE,
      balance
    }
    expect(balanceReducer(undefined, balanceData)).toEqual({balance})
  })
})
