import React, { useEffect, useRef, useState } from 'react'
import LoadCard from './LoadCard'
import './load.css'
import axios from 'axios'


function Load() {
    // let[n,setName]=useState()
    // let[img,setImg]=useState()
    let [products, setProducts] = useState([])
    let [val,setVal]=useState(0)
    let btn=useRef()

    let loadFunc=()=>{
       if(val<8){
        setVal(val+1)
       }
       else{
          btn.current.style.display='none'
       }
    }


    async function getData() {
        const res = await axios.get(`https://dummyjson.com/products?limit=12&skip=${val*12}&select=title,thumbnail,price,id'`)
       

        setProducts(res.data.products)
         


    }

    useEffect(() => {

    getData()
        getData()
    }, [val])
    return (
        <>
        <div className='load'>
         <div className="load-con">
         {
                products.map((item) => {
                    return <LoadCard key={item.id} price={item.price} h1={item.title} img={item.thumbnail} />
                })
            }
         </div>
         <div className="load-btn" onClick={loadFunc} ref={btn}>
                Load More...
            </div>
           
        </div>
         
            </>
    )
}

export default Load
