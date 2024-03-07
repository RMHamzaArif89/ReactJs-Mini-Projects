import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <div className='nav'>
        <ul>
           
            <li><Link to='popup'>PopUp</Link></li>
            {/* <li><Link to='countdown'>Tab</Link></li> */}
            {/* <li><Link to='clock'>Digital Clock</Link></li>
            <li><Link to='rpg'>PasswordGenerator</Link></li>
            <li><Link to='scroll'>Scrollindicator</Link></li> */}
  
      
          
        </ul>
      
    </div>
  )
}

export default Nav
