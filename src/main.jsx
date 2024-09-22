import React from 'react'
import ReactDOM from 'react-dom/client'
import MyGlobalStyles from './styles/GlobalStyles'
import App from './pages/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyGlobalStyles />
    <App />
  </React.StrictMode>,
)
