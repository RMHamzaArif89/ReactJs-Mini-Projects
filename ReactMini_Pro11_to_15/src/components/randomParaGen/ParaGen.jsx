import React, { useState } from 'react'
import './paragen.css'
import Data from './text'


function ParaGen() {
    let [val,setVal]= useState(0)
    const [data,setData]= useState([])
 

    const inpVal=(e)=>{
       let v=e.target.value
       setVal(v)
    }
    let d
    const generate=(e)=>{
        e.preventDefault()
        let number= parseInt(val)
        if(val<1){
            val = 1;
        }
        if(val>9){
            val=8
        }
        setData(Data.slice(0,val))
    }

    
  return (
    <div className="paragen">
    <div className="heading">Generate Paragraphs</div>
    <div className="pa">
        <label for="">Paragraphs:</label>
        <input type="number" value={val} placeholder="enter" id="number" onChange={inpVal}/>
        <button type="submit" className="generate" onClick={generate}>Generate</button>
    </div>


<div className="con-text">
    {data.map((i,index)=>{
        return (
            <p key={index}>{i}</p>
        )
    })}
</div>
</div>
  )
}

export default ParaGen
