import { useState } from 'react'
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom' 
import AutoSearch from './components/autoSearchComplete/AutoSearch'
import CalReducer from './components/CalcUsingReducer/CalReducer'
import Nav from './components/nav/Nav'



function App() {
  

  return(
    <>
       <BrowserRouter>
    <Nav/>
      <Routes>
      
          {/* <Route index element={<Tabs/>} /> */}
          <Route path="autoSearh" element={<AutoSearch/>} />
          <Route path="Calc" element={<CalReducer/>} />
          
       
          
     

          
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

