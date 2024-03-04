import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from './components/nav/Nav'
import Color from './components/ColorGenerator/Color'
import Notification from './components/PopNotification/Notification'
import Toast from './components/ToastNoti/Toast'
import Filter from './components/FilterImage/Filter'


import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
      
          {/* <Route index element={<Age/>} /> */}
          <Route index element={<Filter/>} />
          <Route path="color" element={<Color/>} />
          <Route path="toast" element={<Toast/>} />
          <Route path="notification" element={<Notification/>} />
          
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
