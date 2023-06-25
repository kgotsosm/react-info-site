import React from 'react'
import ReactDOM from 'react-dom/client'
import Info from './Info.jsx'
import Picture from './Picture.jsx'
import Footer from './Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Picture />
    <Info />
    <Footer />
  </React.StrictMode>,
)
