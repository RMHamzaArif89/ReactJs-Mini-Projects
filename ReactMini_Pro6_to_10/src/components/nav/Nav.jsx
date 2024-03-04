import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <div className='nav'>
        <ul>
            {/* <li><Link to='AgeCal'>AgeCalculator</Link></li> */}
            <li><Link to='color'>ColorGenerate</Link></li>
            <li><Link to='notification'>Notification</Link></li>
            <li><Link to='toast'>Toast</Link></li>
          
        </ul>
      
    </div>
  )
}

export default Nav
