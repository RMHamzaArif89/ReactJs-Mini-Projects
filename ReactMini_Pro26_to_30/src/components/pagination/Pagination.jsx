import React, { useEffect, useState } from 'react'
import './pagination.css'
import axios from 'axios'

function Pagination() {
    let[d,setData]=useState([])
    let[curPageNum,setCurPageNum]=useState(1)
    let[postPerPage,setPostPerPage]=useState(10)
    let [val,setVal]=useState()

    
    let LastPostIndex= curPageNum * postPerPage
    let firstPostIndex=LastPostIndex - postPerPage
    let postToShow=d.slice(firstPostIndex,LastPostIndex)

    let totalpages = (d.length/postPerPage);
    // let  = val.slice(firstPostNum,totalpages)
    let arr=[]
    for(let i=1;i<=totalpages;i++) {
      arr.push(i)
    }
    
      
    useEffect(()=>{
        let getData=async()=>{
            let res= await axios.get( ` https://jsonplaceholder.typicode.com/posts`)
              setData(res.data)
              console.log(res.data)
              
        }
getData()
    },[])




    const clickFunc=(p)=>{
      setVal(p)
      setCurPageNum(p)
      console.log(p)
}




  return (
    <div className='pagination'>
<div className="pagination-con">
    {postToShow.map((item)=>{
       return( <li className="li">{item.title}</li>
       )
    })}



</div>
<div className="pagination-list">
                    {
                        arr.map((item, i) => {
                            return <li key={i} className='pag-li' onClick={()=>{clickFunc(item)}}style={{backgroundColor:val!=item?'white':'red'}}>{item}</li>
                        })
                    }
                </div>
    </div>
  )
}

export default Pagination
