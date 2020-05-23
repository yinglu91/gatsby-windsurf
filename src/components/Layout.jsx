import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <div style={{ marginTop: '65px' }}>
        {children}
        <Footer />
      </div>
    </main>
  )
}

export default Layout
