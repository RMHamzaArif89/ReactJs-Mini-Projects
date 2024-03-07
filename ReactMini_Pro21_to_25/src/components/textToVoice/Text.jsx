import React, { useState } from 'react'
import './text.css'

function Text() {
    let[val,setVal]=useState()

    const ChangeFunc=(e)=>{
        let cval=e.target.value;
        setVal(cval)

    }
    const generateVoice=()=>{

        let speech = new SpeechSynthesisUtterance();
        speech.text=val;
        window.speechSynthesis.speak(speech)
    }
  return (
    <div className='text'>
     
    <div className="text-con">
        <div className="text-heading">Text to voice covert</div>
        <textarea name="" className="inp" placeholder="Enter text for generate voice text" value={val} onChange={ChangeFunc}></textarea>
        {/* <select name="" title="speech" id=""></select> */}
        <button onClick={generateVoice}>Generate</button>
    </div>

    </div>

  
  )
}

export default Text
