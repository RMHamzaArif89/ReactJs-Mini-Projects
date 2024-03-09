import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <div className='nav'>
        <ul>
            <li><Link to='slider'>slider</Link></li>
            <li><Link to='starrating'>StarRating</Link></li>
            <li><Link to='load'>LoadMore</Link></li>
            <li><Link to='pagination'>Pagination</Link></li>
           
          
        </ul>
      
    </div>
  )
}

export default Nav
