import React, { useState } from 'react'
import './age.css'

function Age() {
    let[age,setAge]=useState()
    let[inpval,setInpValue]=useState()
    let[result,setResult]=useState()

   const inputValue=(e)=>{
    let v=e.target.value;
        setInpValue(v)
    }

const checkAge=()=>{
    let today= new Date()
    let birthDate= new Date(inpval)
    let age=today.getFullYear() - birthDate.getFullYear()
    setResult(age)

}
    
  return (

      <div className='age'>
            <div className="age-con">

                <div className="mb-3">
                    <label for="exampleInput" className="form-label">Select Age</label>
                    <input type='date' className="form-control" id="exampleInput" aria-describedby="text"
                     onChange={inputValue}  value={inpval}/>

                </div>
             
                <button type="submit" className="btn btn-primary" onClick={checkAge}>Check BMI</button>

           <div className="age-result">
        {result}
           </div>
         
            </div>


        </div>
   
  )
}

export default Age
