import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <div className='nav'>
        <ul>
            <li><Link to='code'>QR_CodeGenerator</Link></li>
            <li><Link to='slider'>Slider</Link></li>
            <li><Link to='paragen'>ParaGenerator</Link></li>
            <li><Link to='password'>Password</Link></li>
            <li><Link to='navbar'>ResponsiveNavBar</Link></li>
            
      
          
        </ul>
      
    </div>
  )
}

export default Nav
