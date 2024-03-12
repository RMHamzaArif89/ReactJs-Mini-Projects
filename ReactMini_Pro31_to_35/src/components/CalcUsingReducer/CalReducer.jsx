import { useReducer, useState } from 'react'

import './calreducer.css'

function CalReducer() {
  let i=0;
  let[val,setVal]=useState([])
  let reducer=(state,action)=>{
    
    if(action.type==='calculate'){
      if(val[0]==0){
        return state='please remove 0'
      }
      return state=eval(val)
    }
    if(action.type==='clear')
   return (state=0 , setVal(''))
  }
let[state,dispatch]=useReducer(reducer,val)

let BtnValue=(e)=>{
  let v=e.target.value;
  // let v2=val+v;
  setVal(val+v)

  // setVal(v2)
}
  
  return (
  <>
    <div className="cal-con">
                <div className="calculator">

                    <div className="cal-screen">

                        <input type="text" value={val} className="screen" placeholder="Enter value" onChange={(e)=>{setVal(e.target.value)}}/>

                    </div>


                    <div className="cal-btn">
                        <button type="button" onClick={BtnValue} value='*' className="btn-cal btn-first">*</button>
                        <button type="button" onClick={BtnValue} value='/' className="btn-cal btn-first">/</button>
                        <button type="button" onClick={BtnValue} value='-' className="btn-cal btn-first">-</button>
                        <button type="button" onClick={BtnValue} value='+' className="btn-cal btn-first">+</button>

                        <button type="button" onClick={BtnValue} value='9' className="btn-cal btn-second">9</button>
                        <button type="button" onClick={BtnValue} value='8' className="btn-cal btn-second">8</button>
                        <button type="button" onClick={BtnValue} value='7' className="btn-cal btn-second">7</button>
                        <button type="button" onClick={BtnValue} value='6' className="btn-cal btn-second">6</button>
                        <button type="button" onClick={BtnValue} value='5' className="btn-cal btn-second">5</button>
                        <button type="button" onClick={BtnValue} value='4' className="btn-cal btn-second">4</button>
                        <button type="button" onClick={BtnValue} value='3' className="btn-cal btn-second">3</button>
                        <button type="button" onClick={BtnValue} value='2' className="btn-cal btn-second">2</button>
                        <button type="button" onClick={BtnValue} value='1' className="btn-cal btn-second">1</button>
                        <button type="button" onClick={BtnValue} value='0' className="btn-cal btn-second">0</button>

                        <button type="button" onClick={BtnValue} value='.' className="btn-cal btn-third btn-dot">.</button>
                        <button type="button" onClick={()=>{dispatch({type:'clear'})}} value='C' className="btn-cal btn-third btn-clear">C</button>
                        <button type="button" onClick={BtnValue} value='log' className="btn-cal btn-log">log</button>
                        <button type="button" onClick={BtnValue} value='(' className="btn-cal btn-log">(</button>
                        <button type="button" onClick={BtnValue} value=')' className="btn-cal btn-log">)</button>
                        <button type="button" onClick={BtnValue} value='%' className="btn-cal btn-log">%</button>
                        <button type="button"  value='=' className=" btn-third btn-equal" onClick={()=>{dispatch({type:'calculate'})}}>=</button>



                    </div>
                </div>
                <div className="dis">
                <span>Your Result:{state}</span>
                <span id="display"></span>
            </div>
            </div>
  </>
  )
}

export default CalReducer
