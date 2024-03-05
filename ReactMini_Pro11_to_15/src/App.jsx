import { useState } from 'react'
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ParaGen from './components/randomParaGen/ParaGen'
import Nav from './components/nav/Nav'
import Password from './components/passwordHide/Password'
import Slider from './components/slider/Slider'
import Navbar from './components/ResponsibeNavBar/navbar'



function App() {
  

  return(
    <>
       <BrowserRouter>
    <Nav/>
      <Routes>
      
          {/* <Route index element={<Age/>} /> */}
        
          <Route path="slider" element={<Slider/>} />
          <Route path="paragen" element={<ParaGen/>} />
          <Route path="password" element={<Password/>} />
          <Route path="navbar" element={<Navbar/>} />
          
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
