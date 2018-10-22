import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBitcoin } from '../actions/bitcoin'

export class Loot extends Component {
  componentDidMount = () => {
    this.props.fetchBitcoin()
  }
  render() {
    console.log(this.props)
    console.log(typeof(this.props.fetchBitcoin))
    return <div />
  }
}

const mapStateToProps = state => ({
  state: state
})

export default connect(
  mapStateToProps,
  { fetchBitcoin }
)(Loot)
