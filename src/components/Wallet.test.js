import React from 'react'
import { shallow } from 'enzyme'
import { Wallet } from './Wallet'

describe('Wallet', () => {
  const mockDeposit = jest.fn()
  const mockWithDraw = jest.fn()
  const props = { balance: 0, deposit: mockDeposit, withdraw: mockWithDraw }
  const wallet = shallow(<Wallet {...props} />)

  it('renders component successfully', () => {
    expect(wallet).toMatchSnapshot()
  })

  it('displays balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet Balance: 0')
  })

  it('containes an input for deposit and withdrawl', () => {
    expect(wallet.find('.input-wallet').exists()).toBe(true)
  })

  describe('when user types into input', () => {
    const userBalance = '25'

    beforeEach(() => {
      wallet
        .find('.input-wallet')
        .simulate('change', { target: { value: userBalance } })
    })

    it('updates localBalance in `state` and converts it to number', () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10))
    })

    describe('and user wants to make a deposit', () => {
      beforeEach(() => {
        wallet.find('.btn-deposit').simulate('click')
      })

      it('dispatches the `deposit() fn` received from props with localbalance', () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10))
      })
    })

    describe('and user wants to make a withdrawl', () => {
      beforeEach(() => {
        wallet.find('.btn-withdraw').simulate('click')
      })

      it('dispatches `withdraw() fn` received as props', () => {
        expect(mockWithDraw).toHaveBeenCalledWith(parseInt(userBalance, 10))
      })
    })
  })
})
