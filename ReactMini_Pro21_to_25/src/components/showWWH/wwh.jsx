import React, { useLayoutEffect, useState } from 'react'

function wwh() {
let[len,setLen]=useState({
    width:'',
    height:''
})
let wResize=()=>{
    let w=(window.innerWidth)/100;
    let h=(window.innerHeight)/100;
    setLen({
       width:w,
       height:h
    })
}
useLayoutEffect(()=>{

    window.addEventListener('resize',wResize)

    return()=>{
        window.removeEventListener('resize',wResize)
    }
},[])
  return (
    <div className='wwh'>
     <div className="wwh-con">
     <div className="www-width"><div className="wwh-innere" style={{width: `${len.width}%`}}></div></div>
        <div className="www-height"><div className="wwh-inner"style={{width: `${len.height}%`}}></div></div>
      
     </div>
    </div>
  )
}

export default wwh
