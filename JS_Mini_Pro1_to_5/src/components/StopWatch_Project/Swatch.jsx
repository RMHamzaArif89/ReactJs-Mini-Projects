import React, { useEffect, useState } from 'react'
import './swatch.css'

function Swatch() {
  let[timer,setTimer]=useState(0)
  let[run,setRun]=useState(false)

 
  useEffect(()=>{
    let interval;
    if(run){
      interval=setInterval(()=>{
     setTimer((prev)=> prev + 10)
      },10)
    }
    else if(!run){
      clearInterval(interval)
      
    }
    return ()=>clearInterval(interval)
  },[run])



  


  return (
    <div className='swatch'>
        <div className="swatch-con">
            <div className="swatch-h">
                StopWatch
            </div>
            <div className="swatch-timer">
                <div className="time">{("0"+ Math.floor(timer / 60000) % 60).slice(-2)}</div>
                <div className="time">{("0"+ Math.floor(timer / 1000) % 60).slice(-2)}</div>
                <div className="time">{("0"+ (timer / 10) % 100)}</div>
            
                
                
            </div>
            <div className="swatch-btns">
                <div className="start btn" onClick={()=>{setRun(true)}}>Start</div>
                <div className="reset btn" onClick={()=>{setTimer(0)}}>Reset</div>
                <div className="stop btn" onClick={()=>{setRun(false)}}>Stop</div>
            </div>
        </div>
      
    </div>
  )
}

export default Swatch
