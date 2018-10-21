import { FETCH_BITCOIN } from './actionTypes'

export const fetchBitcoin = () => dispatch => {
  return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_BITCOIN,
        bitcoin: data
      })
    )
}
