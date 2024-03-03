import React, { useState } from 'react'
import Card from './Card'
import './list.css'
import Data from './data'


function List() {
    let[data,setData]=useState(Data)
    
  return (
    <div className='list'>
        <div className="heading">Movies List </div>
        <div className="length">{data.length} Movies</div>
        <div className="btn" onClick={()=>{setData([])}}>Clear</div>
  <div className="movies">
  {data.map((i)=>{
    const{img,h1,h2}=i;
 
    return <Card img={img} h1={h1} h2={h2}/>
  })}
  </div>
    </div>
  )
}

export default List
