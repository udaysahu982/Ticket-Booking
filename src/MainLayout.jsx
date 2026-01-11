import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import LocationSearch from './PopWindows/LocationSearch'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import SearchModal from './SearchBox/SearchModal'

const MainLayout = () => {

  let [showSearchBox,setShowSearchBox ]=useState(false)

  return (
    <>
    <Navbar showSearchBox={showSearchBox} setShowSearchBox={setShowSearchBox} />
    {showSearchBox && <SearchModal onClose={()=>setShowSearchBox(false)}/>}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout
