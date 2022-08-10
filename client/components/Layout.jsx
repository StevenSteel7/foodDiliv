import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({childern}) => {
  return (
    <>{/* React fragments */}
      
      <Navbar/>
        {childern}  {/* These are page components */}
      <Footer/>
    </>
  )
}

export default Layout
