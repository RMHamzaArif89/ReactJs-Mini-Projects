import React, { useState } from 'react'
import './age.css'

function Age() {
    let[age,setAge]=useState()
    let[inpval,setInpValue]=useState()
    let[result,setResult]=useState({
        days:'',
        mounths:'',
        years:''
        
    })

   const inputValue=(e)=>{
    let v=e.target.value;
        setInpValue(v)
    }

const checkAge=()=>{
    
    let birthDate= new Date(inpval)
       let d1=birthDate.getDate();
    let m1=birthDate.getMonth();
    let y1=birthDate.getYear();

    let today = new Date()
    let d2=today.getDate();
    let m2=today.getMonth();
    let y2=today.getYear();



    let d3, y3, m3;
    //get year for age claculate
    y3=y2-y1;



    //get mounth for age calculate
    if(m2>=m1){
        m3=m2-m1
    }
    else{
        y3--;
        m3=12 + m2 - m1;
    }
    

    //get days for age calcluate
    if(d2>= d1){
        d3=d2-d1;
    }
    else{
        m3--;
        d3=getDays(y1,m1)+d2-d1;
    }


    if(m3 < 0){
        m3 = 11;
        y3--;
    }
    setResult({
        days:d3,
        mounths:m3,
        years:y3
    })
    function getDays(year,mounth){
        return new Date(year,mounth,0).getDate();
    }

}
    
  return (

      <div className='age'>
            <div className="age-con">

                <div className="mb-3">
                    <label for="exampleInput" className="form-label">Select Age</label>
                    <input type='date' className="form-control" id="exampleInput" aria-describedby="text"
                     onChange={inputValue}  value={inpval}/>

                </div>
             
                <button type="submit" className="btn btn-primary" onClick={checkAge}>Check Age</button>

           <div className="age-result">
        {result.years} years {result.mounths} months {result.days} days
           </div>
         
            </div>


        </div>
   
  )
}

export default Age
