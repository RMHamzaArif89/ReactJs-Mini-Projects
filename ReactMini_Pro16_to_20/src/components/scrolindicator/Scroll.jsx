import React, { useState } from 'react'
import './scroll.css'

function Scroll() {
    let[val,setVal]=useState('')
    const ScrollFunc=()=>{
        const height=document.documentElement.scrollHeight-document.documentElement.clientHeight
        const ScrollTop=document.documentElement.scrollTop
        const scrolPercentage=(ScrollTop/height)*100;
        setVal(scrolPercentage)
        // console.log(scrolPercentage)
        // console.log('okay')
    }
window.addEventListener('scroll',ScrollFunc)
    return (
        <div className='scroll' >
            <div className="scroll-line">
                <div className="scroll-inner" style={{width:`${val}%`,height:'100%'}}>

                </div>
            </div>
            <div className="scroll-con">
                <div className="h1">Lorem, ipsum dolor.</div>
                <div className="scroll-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quis saepe esse voluptate odio tenetur, quo fugit sint earum error dolor reiciendis deserunt praesentium est vel molestiae ex distinctio molestias sit. Quisquam ratione sed quis, temporibus voluptas natus ut maxime.</div>
                <div className="h2">Lorem, ipsum dolor.</div>
                <div className="scroll-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi ipsum similique nam fugiat facere natus quis fuga illum perferendis voluptatem ad voluptatum minus, animi consequatur nesciunt? Minima at soluta rerum ratione excepturi quis. Aliquid rem, sed, nihil dolorum voluptatum et unde vel cum autem ex amet hic rerum ullam.</div>
            </div>

        </div>
    )
}

export default Scroll 
