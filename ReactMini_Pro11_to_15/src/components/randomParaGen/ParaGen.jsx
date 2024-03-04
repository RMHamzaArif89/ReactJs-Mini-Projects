import React, { useState } from 'react'
import './paragen.css'
import { preprocessCSS } from 'vite'

function ParaGen() {
    const [val,setVal]=useState()

    const inpVal=(e)=>{
    //    let v=e.target.value
    //    setVal(v)
    //    console.log(val)
    }
    
  return (
    <div class="paragen">
    <div class="heading">Generate Paragraphs</div>
    <div class="pa">
        <label for="">Paragraphs:</label>
        <input type="number" value='' placeholder="enter" id="number" onChange={inpVal}/>
        <button type="submit" class="generate">Generate</button>
    </div>


    <div class="con-text">
       
    </div>
</div>
  )
}

export default ParaGen
