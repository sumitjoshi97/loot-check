import * as actionTypes from './actionTypes'
import * as actions from './balance'

describe('Balance Action', () => {
  it('sets balance', () => {
    const balance = 0
    const expectedAction = { type: actionTypes.SET_BALANCE, balance }

    expect(actions.setBalance(balance)).toEqual(expectedAction)
  })

  it('deposits into balance', () => {
    const deposit = 10
    const expectedAction = {type: actionTypes.DEPOSIT, deposit}

    expect(actions.deposit(deposit)).toEqual(expectedAction)
  })

  it('withdraws amount from balance', () => {
    const withdraw = 10
    const expectedAction = {type: actionTypes.WITHDRAW, withdraw}

    expect(actions.withdraw(withdraw)).toEqual(expectedAction)
  })
})
