import { useEffect, useState } from 'react'
import Heading from './Heading'
import Menu from './Menu'
import Card from './Card'
import Data from '../File'
import './css/filter.css'



function Filter() {
  let [state, setState] = useState(Data)

  const filterFunc = (p) => {
    const selectData = Data.filter((currentItem) => {
      return currentItem.category === p;
    })
    setState(selectData)
  }
  const all = () => {
    setState(Data)
  }

  return (
    <>
<div className="filter">
<Heading />
    <Menu filterFunc={filterFunc} all={all}/>

      <div className="menu">
        {state.map((item) => {
          let { heading, price, img, txt, id } = item;
          return (
            <>
              <Card heading={heading} price={price} img={img} txt={txt} key={id}/>
            </>
          )
        })}
      </div>
</div>
    </>
  )
}

export default Filter
