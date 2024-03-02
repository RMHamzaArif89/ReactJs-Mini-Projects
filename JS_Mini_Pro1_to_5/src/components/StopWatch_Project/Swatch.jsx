import React from 'react'
import './swatch.css'

function Swatch() {
  return (
    <div className='swatch'>
        <div className="swatch-con">
            <div className="swatch-h">
                StopWatch
            </div>
            <div className="swatch-timer">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="swatch-btns">
                <div className="start btn"></div>
                <div className="reset btn"></div>
                <div className="stop btn"></div>
            </div>
        </div>
      
    </div>
  )
}

export default Swatch
