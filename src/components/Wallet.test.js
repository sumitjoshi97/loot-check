import React from 'react'
import { shallow } from 'enzyme'
import { Wallet } from './Wallet'

describe('Wallet', () => {
  const wallet = shallow(<Wallet />)

  it('renders component successfully', () => {
    expect(wallet).toMatchSnapshot()
  })
})
