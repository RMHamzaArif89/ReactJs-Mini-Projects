import React, { useEffect, useLayoutEffect, useState } from 'react'
import './scrolltop.css'

function ScrollTop() {
    let[val,setValue]=useState(false)
    let[h,setH]=useState()
     
    

   let scrollheight=()=>{
   setH(window.scrollY)

   
    
    if(h>300){
        setValue(true)
    }else{
        setValue(false)
    }
   }


    
    useEffect(() => {
        scrollheight
        
        window.addEventListener('scroll', scrollheight)

        return () => {
            window.removeEventListener('scroll', scrollheight)
        }
    },[h])
    // console.log(h)

    // console.log(val)


    const gotoTop=()=>{
        window.scroll({
            top:0,
            left:0,
            behavior:'smooth'
        })
    }
  return (
<>
<div className="scrolltop-con" id="home">


        <div className="con-heading">Join Our Camp</div>
        <div className="con-btn">Explore the Community</div>
    </div>


    <div className="con-2 services con" id="services">
        <div className="con-heading">Services
        </div>
        
    </div>

    <div className="top-link" style={{display:val?'block':'none'}}>
        <div onClick={gotoTop} > &#8593;</div>
    </div>

    <div className="con-3 about con" id="about">
        <div className="con-heading">About</div>
        
    </div>

    <div className="con-4 tour con" id="tour">
        <div className="con-heading">Features Tours</div>
    
    </div>


    <div className="footer">
    </div>










</>
  )
}

export default ScrollTop
