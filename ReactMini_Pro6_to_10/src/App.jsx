import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from './components/nav/Nav'
import Color from './components/ColorGenerator/Color'
import Notification from './components/PopNotification/Notification'


import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
      
          {/* <Route index element={<Age/>} /> */}
          <Route path="color" element={<Color/>} />
          <Route path="notification" element={<Notification/>} />
          
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
