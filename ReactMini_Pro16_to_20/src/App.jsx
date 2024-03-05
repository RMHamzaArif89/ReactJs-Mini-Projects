import { useState } from 'react'
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Clock from './components/digitalClock/Clock'
import RPG from '../../ReactMini_Pro11_to_15/randomPasswordGene/RPG'
import Nav from './components/nav/Nav'




function App() {
  

  return(
    <>
       <BrowserRouter>
    <Nav/>
      <Routes>
      
          {/* <Route index element={<Code/>} /> */}
          <Route path="clock" element={<Clock/>} />
          <Route path="rpg" element={<RPG/>} />
     

          
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
