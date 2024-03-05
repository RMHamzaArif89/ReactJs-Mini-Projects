import React, { useState } from 'react'
import './password.css'

function Password() {
    let[value,setValue]=useState(false)
    let[typeOf,setTypeOf]=useState(true)

  return (
 <>
    <i className="bi bi-moon-fill" id="dark" style={{color:value?'white':'black'}} onClick={()=>{setValue(!value)}}></i>
    <div className={value?'container':'classadd'}>
        <div className="input">
            <input type={typeOf?'password':'text'} className="inp"/>
            <span><i className="bi bi-eye-fill" id="pw" onClick={()=>{setTypeOf(!typeOf)}}></i></span>
        </div>
        <div className="text">
            Show password
        </div>
    </div>
 </>
  )
}

export default Password
