import bitcoinReducer from './bitcoin'
import { FETCH_BITCOIN } from '../actions/actionTypes'

describe('bitcoin Reducer', () => {
  const bitcoinData = { bpi: 'bitcoin price index' }

  const initialState = {
    bitcoin: {}
  }

  it('fetches and sets the bitcoin data', () => {
    expect(
      bitcoinReducer(initialState, {
        type: FETCH_BITCOIN,
        bitcoin: bitcoinData
      })
    ).toEqual({ bitcoin: bitcoinData })
  })
})
