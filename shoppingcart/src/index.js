import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import {createStore} from 'redux'
import appReducers from './reducers'

const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();// cache asset to improve speeds, when offline or out of network
