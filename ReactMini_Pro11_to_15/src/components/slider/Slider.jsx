import React, { useState } from 'react'
import './slider.css'

function Slider() {
  let[counter,setCounter]=useState(1)
  if(counter>7){
    setCounter(counter=1)
  }if(counter<1){
    setCounter(counter=7)
  }
  return (
   <>
     <div className="slider">
        <div className="image-box">
            <button className="btn btn-left" onClick={()=>{setCounter(counter - 1)}}> <i className='bi bi-caret-left-fill'></i> </button>
            <img src={`images/${counter}.jpg`} alt="" className="image"/>
            <button className="btn btn-right" onClick={()=>{setCounter(counter + 1)}}> <i className='bi bi-caret-right-fill'></i> </button>
        </div>
    </div>
   </>
  )
}

export default Slider
