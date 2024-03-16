import React, { useState } from 'react'
import './currency.css'

function Currency() {
    let[val,setVal]=useState('')
    let[val2,setVal2]=useState('')
  return (
    <div className='currency'>
      <div className="currency-con">
        <div className="currency-heading">Convert the currency</div>
       <div className="currency-inp">
       <input type="text" className="inp" value={val} onChange={(e)=>{setVal(e.target.val)}}/>
       <select className='select' name="" id="">
        <option value="Euro">Euro</option>
        <option value="Dollar">Dollar</option>
        <option value=""></option>
       </select>
       </div>
       <div className="currency-heading">
        To
       </div>

       <div className="currency-inp">
       <input type="text" className="inp" value={val2} onChange={(e)=>{setVal2(e.target.val)}}/>
       <select className='select' name="" id="">
        <option value="Euro">Euro</option>
        <option value="Dollar">Dollar</option>
        <option value=""></option>
       </select>
       </div>
        <div className="currency-btn">Convert</div>
      </div>
    </div>
  )
}

export default Currency
