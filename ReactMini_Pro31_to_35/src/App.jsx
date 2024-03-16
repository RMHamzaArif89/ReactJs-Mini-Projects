import { useState } from 'react'
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom' 
import AutoSearch from './components/autoSearchComplete/AutoSearch'
import CalReducer from './components/CalcUsingReducer/CalReducer'
import Currency from './components/currencyConverter/Currency'
import Nav from './components/nav/Nav'



function App() {
  

  return(
    <>
       <BrowserRouter>
    <Nav/>
      <Routes>
      
          {/* <Route index element={<Tabs/>} /> */}
          <Route path="autoSearch" element={<AutoSearch/>} />
          <Route path="Cal" element={<CalReducer/>} />
          <Route path="currency" element={<Currency/>} />
          
       
          
     

          
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

