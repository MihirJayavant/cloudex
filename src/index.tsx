import * as React from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './containers/app/App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import { reducer, allSagas } from './store'
import createSagaMiddleware from 'redux-saga'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './libs/theme'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleWare = createSagaMiddleware()

export const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleWare)))
sagaMiddleWare.run(allSagas)

const root = createRoot(document.getElementById('root')!)

root.render(
  <Provider store={store}>
    <ChakraProvider>
      <>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </>
    </ChakraProvider>
  </Provider>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
