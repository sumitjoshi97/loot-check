import React from 'react'
import { shallow, mount } from 'enzyme'

import { Loot } from './Loot'

describe('Loot Component', () => {
  const mockFetchBitcoin = jest.fn()
  let props = { balance: 10, bitcoin: {}, fetchBitcoin: () => {} }
  let loot = shallow(<Loot {...props} />)

  it('renders properly', () => {
    expect(loot).toMatchSnapshot()
  })

  describe('when mounted', () => {
    beforeEach(() => {
      props.fetchBitcoin = mockFetchBitcoin
      loot = mount(<Loot {...props} />)
    })

    it('dispatches `fetchBitcoin()` it received from props', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled()
    })
  })

  describe('when there are valid bitcoin props', () => {
    beforeEach(() => {
      props = {
        balance: 10,
        bitcoin: { bpi: { USD: { rate: '1,000' } } },
        fetchBitcoin: () => {}
      }
      loot = shallow(<Loot {...props} />)
    })

    it('displays correct bitcoin value', () => {
      expect(loot.find('h3').text()).toEqual('Bitcoin Balance: 0.01')
    })
  })
})
