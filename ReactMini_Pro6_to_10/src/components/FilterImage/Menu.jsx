import React from 'react'
import './css/menu.css'
import Card from './Card'

function Menu({filterFunc,all}) {
 

  return (
    <div className='select'>
    <li onClick={() => { filterFunc('chiken') }}>Chiken</li>
    <li onClick={() => { filterFunc('sandwitch') }}>Sandwitch</li>
    <li onClick={() => { filterFunc('burger') }}>Burger</li>
    <li onClick={() => {all()}}>All</li>


  </div>


  )
}

export default Menu