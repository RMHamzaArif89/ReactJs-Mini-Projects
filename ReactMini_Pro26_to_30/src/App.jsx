import { useState } from 'react'
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import StarRating from './components/starRating/StarRating'
import Slider from './components/ImgSlider/slider'
import Nav from './components/nav/Nav'



function App() {
  

  return(
    <>
       <BrowserRouter>
    <Nav/>
      <Routes>
      
          {/* <Route index element={<Tabs/>} /> */}
          <Route path="starrating" element={<StarRating/>} />
          <Route path="slider" element={<Slider/>} />
          {/* <Route path="wwh" element={<Wwh/>} />
          <Route path="scrolltop" element={<ScrollTop/>} />
          <Route path="text" element={<Text/>} /> */}
          {/* // <Route path="calculator" element={<Calculator/>} /> */}
          
     

          
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
