import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppStore from './stores/AppStore.js'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles/theme.js'
import '@fontsource/archivo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={AppStore}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
)
