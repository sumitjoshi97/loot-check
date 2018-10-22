import { FETCH_BITCOIN } from './actionTypes'
import { fetchBitcoin } from './bitcoin'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

describe('bitcoin Actions', () => {
  let store
  let axiosMock
  const mockResponse = { body: { bpi: 'bitcoin price index' } }

  beforeEach(() => {
    axiosMock = new MockAdapter(axios)
    const createMockStore = configureMockStore([thunk])
    store = createMockStore({ bitcoin: {} })
  })

  it('creates an async action to fetch bitcoin value', () => {
    axiosMock
      .onGet('https://api.coindesk.com/v1/bpi/currentprice.json')
      .reply(200, mockResponse.body)

    const expectedActions = [
      { type: FETCH_BITCOIN, bitcoin: mockResponse.body }
    ]

    fetchBitcoin()(store.dispatch).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
