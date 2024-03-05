import React, { useState } from 'react'
import './password.css'

function Password() {
    let[value,setValue]=useState(false)

  return (
 <>
    <i className="bi bi-moon-fill" id="dark" style={{color:value?'white':'black'}} onClick={()=>{setValue(!value)}}></i>
    <div className={value?'container':'classadd'}>
        <div className="input">
            <input type="password" className="inp"/>
            <span><i className="bi bi-eye-fill" id="pw"></i></span>
        </div>
        <div className="text">
            Show password
        </div>
    </div>
 </>
  )
}

export default Password
