import { FETCH_BITCOIN } from './actionTypes'
import { fetchBitcoin } from './bitcoin'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

const createMockStore = configureMockStore([thunk])
const store = createMockStore({ bitcoin: {} })

const mockResponse = { body: { bpi: 'bitcoin price index' } }

fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json', mockResponse)

describe('bitcoin Actions', () => {
  it('creates an async action to fetch bitcoin value', () => {
    const expectedActions = [
      { bitcoin: mockResponse.body, type: FETCH_BITCOIN }
    ]

    store.dispatch(fetchBitcoin()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
