import { useState,useRef } from 'react'
import './navbar.css'

function Navbar() {
let[state,setState]=useState(false)





  return (
    <>

   
    <div className={state?"nav-display":"nav-side"} id="nav-side">
        <div className="nav-text">RM desginers</div>
        <div className="list">
          <li className="close" onClick={()=>{setState(!state)}}>Close</li>
          <li>portfolio</li>
          <li>about me</li>
          <li>contact</li>
        </div>
      </div>
    


      <div id="op">
        <div className="nav-bar">
          <div className="nav-t">
            RM Devlopers
          </div>


          <div className="nav-tog">
            <a className="open" href="#" onClick={()=>{setState(!state)}} >☰</a>
          </div>

        </div>

      </div>

    </>
  )
}

export default Navbar

