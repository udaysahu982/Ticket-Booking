import React from 'react'
import Navbar from './Navbar/Navbar'
import LocationSearch from './PopWindows/LocationSearch'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout
