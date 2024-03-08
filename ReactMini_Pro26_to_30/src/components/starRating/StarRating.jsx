import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6";
import './rating.css'

function StarRating() {
  let [val,setVal]=useState([1,2,3,4,5,6])
  let [rating,setRating]=useState(0)
  let [hov,setHov]=useState(0)
 
  const clickFunc=(v)=>{
    setRating(v)
  }
  const mouseEnterFunc=(v)=>{
    
    setHov(v)
  }
  const mouseLeaveFunc=(p)=>{
   setHov(hov)
  }


  return (
    <div className='rating'>
      <div className="star-con">
    {
        val.map((_,i)=>{
          i+=1;
        return  <FaStar key={i} onClick={()=>{clickFunc(i)}} 

        onMouseEnter={()=>{mouseEnterFunc(i)}}

        onMouseLeave={()=>{mouseLeaveFunc(i)}}
        className={i<=(rating||hov)?'active':'nac'}/>
          
            })
    }
      </div>
    </div>
  )
}

export default StarRating
