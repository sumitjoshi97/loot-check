import React from 'react'
import { shallow, mount } from 'enzyme'

import { Loot } from './Loot'

describe('Loot Component', () => {
  const mockFetchBitcoin = jest.fn()
  const props = { balance: 10, bitcoins: {}}
  let loot = shallow(<Loot {...props} />)

  it('renders properly', () => {
    expect(loot).toMatchSnapshot()
  })

  describe('when mounted', () => {
    beforeEach(() => {
      props.onFetchBitcoin = mockFetchBitcoin
      loot = mount(<Loot {...props} />)
    })

    it('dispatches `fetchBitcoin()` it received from props', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled()
    })
  })
})
