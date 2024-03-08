import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <div className='nav'>
        <ul>
            <li><Link to='slider'>slider</Link></li>
            <li><Link to='starrating'>StarRating</Link></li>
            {/* <li><Link to='notification'>Notification</Link></li>
            <li><Link to='toast'>Toast</Link></li>
            <li><Link to='accordian'>Accordian</Link></li> */}
          
        </ul>
      
    </div>
  )
}

export default Nav
