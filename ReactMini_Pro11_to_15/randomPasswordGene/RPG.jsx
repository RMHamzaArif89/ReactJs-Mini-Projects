import React from 'react'
import './rpg.css'
import { useState } from 'react'
import { useEffect } from 'react';

function RPG() {
    let[val,setValue]=useState('')
    let password=''

    const Generate=()=>{
    
    
   let uCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
   let lCase='abcdefghijklmnopqrstuvwxyz'
    let num='0123456789'
    let Symbol='@#$%&'
    


        password+=uCase[Math.floor(Math.random() * uCase.length)];
    password+=lCase[Math.floor(Math.random() * lCase.length)];
    password+=num[Math.floor(Math.random() * num.length)];
    password+=Symbol[Math.floor(Math.random() * Symbol.length)];

    let allChar='ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'
  let len=10;

    
      for(let i=0;i<len;i++){
        password+=allChar[Math.floor(Math.random() * allChar.length)];
      }
   
    
    setValue(password)
    }
  return (
    <div className="rpg">
    <div className="rpg-con">

        <div className="con-text">

            <div className="heading">
                Generate a
            </div>
            <div className="heading-2">
                Random Password
            </div>
            <div className="input">
                <input type="text" value={val} name="" id="password"/>
            </div>
            <div className="btn" onClick={Generate}>
                Generate
            </div>
        </div>
    </div>

</div>
  )
}

export default RPG
