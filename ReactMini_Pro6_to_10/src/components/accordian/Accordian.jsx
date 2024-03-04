import React, { useState } from 'react'
import './accordian.css'

function Accordian() {
    let[show,setShow]=useState(false)
    let[show2,setShow2]=useState(false)
    let[show3,setShow3]=useState(false)


    return (
        <div className="accordian">
            <div className="con-heading">General Questions</div>
            <div className="con-question">Do you accept all local Cards?<span onClick={()=>{setShow(!show)}}>{show?'-':'+'}</span>
                <div className={show?'ans-show':'con-ans'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, consectetur.</div>
            </div>
            <div className="con-question">Do you agree the condtions?<span onClick={()=>{setShow2(!show2)}}>{show2?'-':'+'}</span>
                <div className={show2?'ans-show':'con-ans'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, expedita Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, consectetur..</div>
            </div>
            <div className="con-question">What your advantage from this?<span onClick={()=>{!setShow3(!show3)}}>{show3?'-':'+'}</span>
                <div className={show3?'ans-show':'con-ans'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, consectetur.</div>
            </div>
        </div>
    )
}

export default Accordian
