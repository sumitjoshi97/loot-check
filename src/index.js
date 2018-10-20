import React from 'react'
import { render } from 'react-dom'

import { createStore } from 'redux'
import rootReducer from './reducers/balance'
import { Provider } from 'react-redux'
import App from './App'

const store = createStore(rootReducer)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(app, document.getElementById('root'))
