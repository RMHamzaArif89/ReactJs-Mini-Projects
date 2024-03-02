import React, { useState } from 'react'
import './bmi.css'
import { Link } from 'react-router-dom'


function Bmi() {
    let[w,setW]=useState()
    let[h,setH]=useState()
    let[bmi,setBmi]=useState()
    let[result,setResult]=useState()

    let changeWidth=(e)=>{
    let val=e.target.value
    setW(val)
    
    }

    let changeHeight=(e)=>{
    let val2=e.target.value
    setH(val2)
    }

    const checkBmi=(e)=>{
      if(w==0||h==0){
        
        alert('Please Enter width & height')
      }
      else{
        let bmiVal=(w/(h*h)*703)
        setBmi(bmiVal.toFixed(1))
    
       if(bmi<25){
        setResult('You are UnderWeight')
      }
      else if(bmi>=25 && bmi<30){
        setResult('Your are healthy')
      }
      else{
        setResult('You are overweight')
      }
      }
      //calculate the bmi
     
    }
    return (
        <div className='bmi'>
            <div className="bmi-con">

                <div className="mb-3">
                    <label for="exampleInput" className="form-label">Enter Weight(lbs)</label>
                    <input type="text" className="form-control" id="exampleInput" aria-describedby="text"
                     onChange={changeWidth}  value={w}/>

                </div>
                <div className="mb-3">
                    <label for="exampleInput2" className="form-label">Enter Height (Inch)</label>
                    <input type="text" className="form-control" id="exampleInput2"
                    onChange={changeHeight} value={h} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={checkBmi}>Check BMI</button>

           <div className="result">
        {result}
           </div>
           <div className="bmi-text">
            {bmi}
           </div>
            </div>


        </div>
    )
}

export default Bmi 
