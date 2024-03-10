import React, { useEffect, useState } from 'react'
import './autosearch.css'
import { IoSearch } from "react-icons/io5";
import axios from 'axios'

function AutoSearch() {
    let[val,setVal]=useState()
    let[data,setData]=useState()
    let [filterData,setFilterData]=useState([])

    let fetchFunc=async()=>{
   try{
    let res=await axios.get('https://dummyjson.com/products/categories')
    setData(res.data)
   }catch(error){
       console.log(error)
   }
    }

    let SearchFunc=()=>{
        if(val.length>0){
          let newData=data.filter((item)=>{return item===val})
         
          setFilterData(newData)
        }
    }


    useEffect(()=>{
      fetchFunc()
    },[])



  return (
    <div className='autosearch'>
    <div className="auto-input">
        <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
        <i className="icon">
        <IoSearch onClick={SearchFunc}/>
        </i>
    </div>
    <div className="auto-con">
    {
        filterData.map((i)=>{
        return <li className='auto-li'>{i}</li>
        })
    }
    </div>
    </div>
  )
}

export default AutoSearch
