import React from 'react'
import { shallow } from 'enzyme'

import { Loot } from './Loot'

describe('Loot Component', () => {
  const loot = shallow(<Loot />)

  it('renders properly', () => {
    expect(loot).toMatchSnapshot()
  })
})