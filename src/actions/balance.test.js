import * as actionTypes from './actionTypes'
import * as actions from './balance'

describe('Balance Action', () => {
  it('creates action to set balance', () => {
    const balance = 0
    const expectedAction = { type: actionTypes.SET_BALANCE, balance }

    expect(actions.setBalance(balance)).toEqual(expectedAction)
  })
})
