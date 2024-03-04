import React, { useState } from 'react'
import './notification.css'

function Notification() {
    let[pop,setPop]=useState(false)

    let popup=()=>{
        setPop(!pop)
        // console.log(pop)
    }
  return (
    <div className="notification">
    <div className={pop?'pop-add':'pop-up'}>

        <div className="pop-logo">
            Done
        </div>
        <div className="pop-heading">
            Thank You!
        </div>
        <div className="pop-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ipsum? Culpa quasi labore debitis
            nobis sequi ducimus quam?
        </div>
        <div className="pop-btn" onClick={()=>{setPop(false)}}>okay</div>
    </div>



    <div className="button" onClick={popup}>submit</div>
</div>

  )
}

export default Notification
