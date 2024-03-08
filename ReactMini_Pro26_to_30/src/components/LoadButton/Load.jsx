import React, { useEffect, useState } from 'react'
import LoadCard from './LoadCard'
import axios from 'axios'


function Load() {
    // let[n,setName]=useState()
    // let[img,setImg]=useState()
    let [products, setProducts] = useState([])

    useEffect(() => {

        async function getData() {
            const res = await axios.get(`https://dummyjson.com/products`)
            console.log(res.data.products[0].price)
            // setName(res.data.products.name)
            setProducts(res.data.products)
            // setImg(res.data.products.images)


        }
        getData()
    }, [])
    return (
        <div className='load'>
            {
                products.map((item) => {
                    return <LoadCard price={item.price} h1={item.title} />
                })
            }

        </div>
    )
}

export default Load
