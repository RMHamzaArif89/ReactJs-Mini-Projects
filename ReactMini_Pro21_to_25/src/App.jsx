import { useState } from 'react'
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Popup from './components/popup/Popup'
import Tabs from './components/tabs/Tabs'
import Nav from './components/nav/Nav'



function App() {
  

  return(
    <>
       <BrowserRouter>
    <Nav/>
      <Routes>
      
          <Route index element={<Tabs/>} />
          <Route path="popup" element={<Popup/>} />
          {/* <Route path="rpg" element={<RPG/>} />
          <Route path="calculator" element={<Calculator/>} />
          <Route path="scroll" element={<Scroll/>} /> */}
     

          
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
