import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import './slider.css'
import Data from './imgData'

function Slider() {
    let [data, setData] = useState(Data)
    let [val,setVal]=useState(0)

    const clickFunc=(p)=>{
        setVal(p)
        
    }
    let leftClickFunc=()=>{
        if(val>0){
            setVal(val-1)
        }else{
            setVal(data.length-1)
        }
    }
    let rightClickFunc=()=>{
      if(val<data.length-1){
        setVal(val+1)
      }else{
        setVal(0)
      }
    }
    return (
        <div className='slider'>
            <div className="slider-con">
                {/* we can show in this way below given method */}
                {/* {
                  data.map((img,i)=>{
                   return <img src={img.img} alt="" className={val==i?'slider-img':'nimg'} />
                  })
                } */}
                {/* we can also show the slider in this way */}
                
                <div className="arrow-left arrow" onClick={leftClickFunc}><FaArrowLeft /></div>
                    <img src={data[val].img} alt="" className='slider-img'/>
                    <div className="arrow-right arrow" onClick={rightClickFunc}><FaArrowRight /></div>

                
                <div className="pagination">
                    {
                        data.map((_, i) => {
                            return <li key={i} className='pag-li' onClick={()=>{clickFunc(i)}}style={{backgroundColor:val!=i?'white':'red'}}>{i}</li>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Slider
