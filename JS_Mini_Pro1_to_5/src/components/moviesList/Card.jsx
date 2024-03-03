import React from 'react'

function Card({img,h1,h2}) {
  return (
    <div className="list-card">
      <img src={img} alt="" className="card-img" />
        <div className="card-h">{h1}</div>
        <div className="card-h2">{h2}</div>
        
      </div>
  )
}

export default Card
