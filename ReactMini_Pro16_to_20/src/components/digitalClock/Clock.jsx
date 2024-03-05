import React, { useEffect, useState } from 'react'
import './clock.css'

function Clock() {
let[min,setMin]=useState(0)
let[sec,setSec]=useState(0)
let[hour,setHour]=useState(0)



 useEffect(()=>{
         
        const date=new Date()
        let m=date.getMinutes()
        let s=date.getSeconds()
        let h=date.getHours()
        
        setMin(m)
        
        setHour(h)
           setTimeout(() => {
      setSec(s);
    }, 1000);


     
    
 },[sec])
//  var ses= hour >= 12 ? 'pm' : 'am';
//  setSession(ses)

//  if(hour<9){
//     setHour('0'+hour)
//  }
//  if(sec<9){
//     setSec('0'+sec)
//  }
//  if(min<9){
//     setMin('0'+min)
//  }



  return (
    <div className="clock-con">
    <div className="time">
         {hour}:{min}:{sec} {hour>=12?'PM':'AM'}
    </div>
</div>

  )
}

export default Clock
