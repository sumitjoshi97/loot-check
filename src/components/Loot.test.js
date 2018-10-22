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
})
