import React from 'react'
import './countdown.css'

function Countdown() {
  return (
    <>
    
    <div className="countdown">
            <div className="text">We Are Coming to </div> 
            <div className="dateE"> </div>

            <div className="col">
                <div className="col1"><input type="text" placeholder="days" name="days" id="" readonly value="0"/><br/> Days</div>
              
                <div className="col1"><input type="text" name="hours" placeholder="hours" id="" readonly value="0"/><br/> Hours</div>
              
                <div className="col1"><input type="text" name="mints" id="" placeholder="mints" readonly value="0"/><br/> Mints</div>
              
                <div className="col1"><input type="text" name="seconds" id="" placeholder="seconds" readonly value="0" /><br/> Seconds</div>
              
            </div>

        </div>
    </>
  )
}

export default Countdown
