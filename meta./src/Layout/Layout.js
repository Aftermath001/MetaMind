import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './partials/Navbar/Navbar'
import Footer from './partials/Footer/Footer'

function Layout({children}) {
  return (
    <div className='layout'>
      <Navbar />
      <Outlet />
      <Footer /> 
    </div>
  )
}

export default Layout