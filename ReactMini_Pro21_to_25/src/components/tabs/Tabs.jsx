import React from 'react'
import './tabs.css'
import TabData from './tabData'
import { useState } from 'react'


function Tabs() {
    let[data,setData]=useState(TabData)
    let[dataVal,setDatavalue]=useState(0)

    const showFunc=(p)=>{
       setDatavalue(p)
    }
 
    return (
        <>
            <div className="tabs">
                <div className="tab-con">
                    <div className="heading">Tabs</div>
                 
                    <>
                    <div className="img">
                        <img src={data[dataVal].img} alt="" />
                    </div>
                    <div className="btn-container">
                    {data.map((item,index)=>{
                    
                        return <div key={item.btn} className="btn" onClick={()=>{showFunc(index)}}>{item.btn}</div>
                })}
                 </div>
                    <div className="content">
                        {data[dataVal].text}
                    </div>

                    </>

                   
                </div>
            </div>
        </>
    )
}

export default Tabs
