import { useState } from 'react'
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Popup from './components/popup/Popup'
import Tabs from './components/tabs/Tabs'
import Wwh from './components/showWWH/wwh'
import ScrollTop from './components/scrollToTop/ScrollTop'
import Nav from './components/nav/Nav'
import Text from './components/textToVoice/Text'



function App() {
  

  return(
    <>
       <BrowserRouter>
    <Nav/>
      <Routes>
      
          <Route index element={<Tabs/>} />
          <Route path="popup" element={<Popup/>} />
          <Route path="wwh" element={<Wwh/>} />
          <Route path="scrolltop" element={<ScrollTop/>} />
          <Route path="text" element={<Text/>} />
          {/* // <Route path="calculator" element={<Calculator/>} /> */}
          
     

          
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
