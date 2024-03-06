import React, { useState } from 'react'
import './calculator.css'

function Calculator() {
    let[val,setValue]=useState([])
    let[answer,setAnswer]=useState('')

    const changeValue=(e)=>{
        let inpValue=e.target.value;
        setValue(inpValue)
    }
    const calValue=()=>{
    

      let ans=eval(val)
      setAnswer(ans)
      
    //   console.log(val)
    }
   
    



const BtnValue=(e)=>{
    
    const value=e.target.value
    const value2=val+value;
    setValue(value2)

}

const BtnClear=()=>{
    setValue('')
    setAnswer('')
}

    return (
        <>
            <div className="cal-con">
                <div className="calculator">

                    <div className="cal-screen">

                        <input type="text" value={val} className="screen" placeholder="Enter value" onChange={changeValue}/>

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
                        <button type="button" onClick={BtnClear} value='C' className="btn-cal btn-third btn-clear">C</button>
                        <button type="button" onClick={BtnValue} value='log' className="btn-cal btn-log">log</button>
                        <button type="button" onClick={BtnValue} value='(' className="btn-cal btn-log">(</button>
                        <button type="button" onClick={BtnValue} value=')' className="btn-cal btn-log">)</button>
                        <button type="button" onClick={BtnValue} value='%' className="btn-cal btn-log">%</button>
                        <button type="button"  value='=' className=" btn-third btn-equal" onClick={calValue}>=</button>



                    </div>
                </div>
                <div className="dis">
                <span>Your Result:{answer}</span>
                <span id="display"></span>
            </div>
            </div>


          








        </>
    )
}

export default Calculator
