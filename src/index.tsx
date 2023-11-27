import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './containers/App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './libs/theme'
import { store } from './store'

const root = createRoot(document.getElementById('root')!)

root.render(
  <Provider store={store}>
    <ChakraProvider>
      <>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </>
    </ChakraProvider>
  </Provider>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
