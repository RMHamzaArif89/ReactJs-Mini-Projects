import React from 'react'
import './calculator.css'

function Calculator() {
    return (
        <>
            <div className="cal-con">
                <div className="calculator">

                    <div className="cal-screen">

                        <input type="text" className="screen" placeholder="Enter value" />

                    </div>


                    <div className="cal-btn">
                        <button type="button" className="btn-cal btn-first">*</button>
                        <button type="button" className="btn-cal btn-first">/</button>
                        <button type="button" className="btn-cal btn-first">-</button>
                        <button type="button" className="btn-cal btn-first">+</button>

                        <button type="button" className="btn-cal btn-second">9</button>
                        <button type="button" className="btn-cal btn-second">8</button>
                        <button type="button" className="btn-cal btn-second">7</button>
                        <button type="button" className="btn-cal btn-second">6</button>
                        <button type="button" className="btn-cal btn-second">5</button>
                        <button type="button" className="btn-cal btn-second">4</button>
                        <button type="button" className="btn-cal btn-second">3</button>
                        <button type="button" className="btn-cal btn-second">2</button>
                        <button type="button" className="btn-cal btn-second">1</button>
                        <button type="button" className="btn-cal btn-second">0</button>

                        <button type="button" className="btn-cal btn-third btn-dot">.</button>
                        <button type="button" className=" btn-third btn-clear">C</button>
                        <button type="button" className="btn-cal btn-log">log</button>
                        <button type="button" className="btn-cal btn-log">(</button>
                        <button type="button" className="btn-cal btn-log">)</button>
                        <button type="button" className="btn-cal btn-log">%</button>
                        <button type="button" className=" btn-third btn-equal">=</button>



                    </div>
                </div>
            </div>


            <div className="dis">
                <span>Your Result:</span>
                <span id="display"></span>
            </div>








        </>
    )
}

export default Calculator
