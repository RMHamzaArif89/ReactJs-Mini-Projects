import { useState } from 'react'
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Popup from './components/popup/Popup'
import Tabs from './components/tabs/Tabs'
import Wwh from './components/showWWH/wwh'
import Nav from './components/nav/Nav'



function App() {
  

  return(
    <>
       <BrowserRouter>
    <Nav/>
      <Routes>
      
          <Route index element={<Tabs/>} />
          <Route path="popup" element={<Popup/>} />
          <Route path="wwh" element={<Wwh/>} />
          {/* // <Route path="calculator" element={<Calculator/>} /> */}
          
     

          
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
