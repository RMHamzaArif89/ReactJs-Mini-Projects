import React, { useEffect, useState } from 'react'
import './clock.css'

function Clock() {
let[time,setTime]=useState(0)




 useEffect(()=>{
         
        const date=new Date()
  
        
       
        
       
           setTimeout(() => {
            let timeText = date.toLocaleTimeString();
            setTime(timeText)
    }, 1000);


     
    
 })



  return (
    <div className="clock-con">
    <div className="time">
         {time}
    </div>
</div>

  )
}

export default Clock
