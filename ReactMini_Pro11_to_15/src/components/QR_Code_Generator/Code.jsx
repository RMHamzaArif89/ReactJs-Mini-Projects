import React, { useState } from 'react'
import './code.css'

function Code() {
    let[code,setCode]=useState('')
    let [value,setValue]=useState('')

    const changevalue=(e)=>{
      let val=e.target.value
      setValue(val)
    }
    const Generate=()=>{
        setCode(value)
    }
    return (
        <div class="container">
            <div class="con-heading">QR Code Generator</div>
            <div class="con-input">
                <input type="text" placeholder="text or URL" class="input" onChange={changevalue} />
            </div>
            <div class="con-qr"><img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${code}`} alt="enter value to generate the qr code"/></div>
            <div class="con-btn" onClick={Generate}>Generate</div>

        </div>
    )
}

export default Code
