import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <div className='nav'>
        <ul>
            {/* <li><Link to='AgeCal'>AgeCalculator</Link></li> */}
            <li><Link to='BmiCal'>BmiCalculator</Link></li>
            <li><Link to='Swatch'>StopWatch</Link></li>
            <li><Link to='List'>List</Link></li>
            <li><Link to='dragdrop'>Drag&Drop</Link></li>
        </ul>
      
    </div>
  )
}

export default Nav
