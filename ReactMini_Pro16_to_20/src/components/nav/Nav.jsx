import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <div className='nav'>
        <ul>
           
            <li><Link to='calculator'>Calculator</Link></li>
            <li><Link to='clock'>Digital Clock</Link></li>
            <li><Link to='rpg'>PasswordGenerator</Link></li>
  
      
          
        </ul>
      
    </div>
  )
}

export default Nav
