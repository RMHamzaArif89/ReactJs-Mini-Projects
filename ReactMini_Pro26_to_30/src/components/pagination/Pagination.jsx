import React, { useEffect, useState } from 'react'
import './pagination.css'
import axios from 'axios'

function Pagination() {
    let[d,setData]=useState([])
 

    useEffect(()=>{
        let getData=async()=>{
            let res= await axios.get( ` https://jsonplaceholder.typicode.com/posts`)
              setData(res.data)
              
              
        }
getData()
    },[])
  return (
    <div className='pagination'>
<div className="pagination-con">
    {d.map((item)=>{
       return( <li className="li">{item.title}</li>
       )
    })}
</div>
      
    </div>
  )
}

export default Pagination
