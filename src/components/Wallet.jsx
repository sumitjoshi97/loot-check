import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deposit, withdraw } from '../actions/balance'

export class Wallet extends Component {
  state = {
    balance: 0
  }

  updateBalance = e => {
    this.setState({
      balance: parseInt(e.target.value, 10)
    })
  }
  render() {
    return (
      <div>
        <h3 className="balance">Wallet Balance: {this.props.balance}</h3>
        <input className="input-wallet" onChange={this.updateBalance} />
        <button
          className="btn-deposit"
          onClick={() => this.props.deposit(this.state.balance)}
        >
          Deposit
        </button>
        <button
          className="btn-withdraw"
          onClick={() => this.props.withdraw(this.state.balance)}
        >
          Withdrawl
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  balance: state.balance.balance
})

export default connect(
  mapStateToProps,
  { deposit, withdraw }
)(Wallet)
