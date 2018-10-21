import balanceReducer from './balance'
import balanceReducer2 from './balance'
import * as actionTypes from '../actions/actionTypes'

describe('balance Reducer', () => {
  const initialState = {
    balance: 5
  }

  describe('when initializing', () => {
    it('sets a balance', () => {
      const balanceAction = {
        type: actionTypes.SET_BALANCE,
        balance: 10
      }
      expect(balanceReducer(initialState, balanceAction)).toEqual({
        balance: 10
      })
    })

    describe('then reinitializes', () => {
      it('reads balance from cookies', () => {
        expect(balanceReducer2(initialState, {})).toEqual({ balance: 10 })
      })
    })
  })

  it('deposits into balance', () => {
    const deposit = 10
    const depositAction = {
      type: actionTypes.DEPOSIT,
      deposit
    }

    const expectedState = {
      balance: initialState.balance + deposit
    }

    expect(balanceReducer(initialState, depositAction)).toEqual(expectedState)
  })

  it('withdraws from balance', () => {
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
