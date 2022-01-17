import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// Polaris imports
import '@shopify/polaris/build/esm/styles.css'
import { AppProvider } from '@shopify/polaris'
import enTranslations from '@shopify/polaris/locales/en.json'

const WrappedApp = () => {
  return (
    <React.StrictMode>
      <AppProvider i18n={enTranslations}>
        <App />
      </AppProvider>
    </React.StrictMode>
  )
}

ReactDOM.render(<WrappedApp />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
