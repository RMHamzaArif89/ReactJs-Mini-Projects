import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <div className='nav'>
        <ul>
           
            <li><Link to='popup'>PopUp</Link></li>
            <li><Link to='wwh'>Wwh</Link></li>
             <li><Link to='scrolltop'>ScrollTop</Link></li>
            <li><Link to='text'>TextToVoice</Link></li>
            
  
      
          
        </ul>
      
    </div>
  )
}

export default Nav
