import React from 'react'
import { render } from 'react-dom'

import { createStore} from 'redux'
import rootReducer from './reducers/balance'
import { Provider } from 'react-redux'
import App from './components/App'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(app, document.getElementById('root'))
