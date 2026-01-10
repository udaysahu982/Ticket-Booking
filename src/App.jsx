import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import MySwiper from './swiper/MySwiper'
import { Link,Outlet,Routes, Route } from 'react-router-dom'
import Movies from './Movies/Movies'
import Events from './Events/Events'
import Dining from './Dining/Dining'
import Foryou from './ForYou/Foryou'
import Signup from './Signup/Signup'
import MainLayout from './MainLayout'
import AuthLayout from './AuthLayout'
import Login from './Signup/Login'
import BookingPage from './BookingPage/BookingPage'
import LocationSearch from './PopWindows/LocationSearch'
import UserDetails from './Signup/SideNav/UserDetails'



function App() {
  

  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route element={<MainLayout/>}>
      <Route path="/" element={<Movies/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/dining" element={<Dining/>}/>
      <Route path="/foryou" element={<Foryou/>}/>
      <Route path='/Booking/:id' element={<BookingPage/>}/>
      </Route>

      <Route element={<AuthLayout/>}>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/user' element={<UserDetails/>}/>
    
      </Route>
    </Routes>
    
    
    </>
  )
}

export default App
