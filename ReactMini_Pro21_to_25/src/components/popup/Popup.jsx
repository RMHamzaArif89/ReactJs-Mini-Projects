import React from 'react'
import './popup.css'
import { useState } from 'react'

function Popup() {
    let[val,setValue]=useState(false)
    return (
        <div className="pop-container">
            <div className="popup">

                <div className="pop-con" style={{display:val?'none':'flex'}}>
                    <div className="con-heading">Modal</div>
                    <button className="open" onClick={()=>{setValue(true)}}>Open Modal</button>

                </div>



                <div className="modal modal-btn" style={{display:val?'block':'none'}}>
                    <button className="close" onClick={()=>{setValue(false)}}>X</button>

                    <div className="con-heading">Modal Has Open
                        <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit dolor
                            facilis sed nam voluptate soluta fuga in voluptatibus quas?</div>
                    </div>

                </div>


            </div>
        </div>


    )
}

export default Popup
