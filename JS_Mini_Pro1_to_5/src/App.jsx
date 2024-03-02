import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bmi from './components/BMI_Project/Bmi'
import Age from './components/AgeCal_Project/Age'
import Nav from './components/nav/Nav';
import Swatch from './components/StopWatch_Project/Swatch';

function App() {
 return(
  <>
    <BrowserRouter>
    <Nav/>
      <Routes>
      
          <Route index element={<Age/>} />
          <Route path="BmiCal" element={<Bmi/>} />
          <Route path="Swatch" element={<Swatch/>} />
      </Routes>
    </BrowserRouter>
</>
 )
}

export default App
