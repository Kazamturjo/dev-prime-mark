import React from 'react'

import Announcement from '../components/Navbar/Annaouncement'

import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';





const Layout = ({children}) => {
  return (
    <>
    <Announcement />
    <Navbar />
    {children}
    <Footer />
  </>
  )
}

export default Layout