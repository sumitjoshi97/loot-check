import rootReducer from './index'

describe('rootReducer', () => {
  it('initializes default state', () => {
    const expectedState = {
      balance: {
        balance: 0
      },
      bitcoin: {
        bitcoin: null
      }
    }
    expect(rootReducer({}, {})).toEqual(expectedState)
  })
})
