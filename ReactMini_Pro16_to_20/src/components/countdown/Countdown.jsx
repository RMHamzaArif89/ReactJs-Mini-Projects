import React, { useEffect, useState } from 'react'
import './countdown.css'

function Countdown() {
    let[time,setTime]=useState({
        days:'',
        hours:'',
        mints:'',
        seconds:'',
    })
    let changeVal=()=>{
        setTime({days:'dkjslk'})
    }
    
    let endDate = '22 april 2024 8:21 AM'
    const end = new Date(endDate)
            const now = new Date()
    useEffect(()=>{
        let myInterval= setTimeout(()=>{
            
            
            const diff = (end - now) /1000;
            let d=(Math.floor(diff/3600/24))
            let h=(Math.floor(diff/3600)%24)
            let m=(Math.floor(diff/60)%60)
            let s=(Math.floor(diff)%60)
            setTime({days:d,hours:h,mints:m,seconds:s})
            // setTime({days:Math.floor(diff/3600/24)},{hours:Math.floor(diff/3600)%24},{mints:Math.floor(diff/60)%60})},{seconds:Math.floor(diff)%60})
            // setTime({hours:Math.floor(diff/3600)%24})
            // setTime({mints:Math.floor(diff/60)%60})
        //  setTime({seconds:Math.floor(diff)%60})
            // console.log(time.days)
        },1000)

        return () => {
            clearInterval(myInterval);
          }
    })



  return (
    <>
    
    <div className="countdown">
            <div className="text">We Are Coming to </div> 
            <div className="dateE"> </div>

            <div className="col">
                <div className="col1"><input type="text" placeholder="days" name="days" id="" readOnly value={time.days}/><br/> Days</div>
              
                <div className="col1"><input type="text" name="hours" placeholder="hours" id="" readOnly value={time.hours}/><br/> Hours</div>
              
                <div className="col1"><input type="text" name="mints" id="" placeholder="mints" readOnly value={time.mints} /><br/> Mints</div>
              
                <div className="col1"><input onClick={changeVal} type="text" name="seconds" id="" placeholder="seconds" readOnly value={time.seconds} /><br/> Seconds</div>
              
            </div>

        </div>
    </>
  )
}

export default Countdown
