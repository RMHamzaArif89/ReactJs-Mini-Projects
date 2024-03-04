import React, { useEffect, useState } from 'react'
import './color.css'
function Color() {
    let[color,setColor]=useState()
    let[btnColor,setBtn]=useState()

    const hexaDecimal = '0123456789ABCDEF'
   
    
    const ChangeColor=()=>{  
      setColor(getRandomNumber())
      setBtn(getRandomBtnColor())
        
}
function getRandomNumber(){
    let hexaColor='#'
   
  
    for(let i=0;i<6;i++){
        hexaColor+=hexaDecimal[Math.floor(Math.random() * 16)]
      
}
return hexaColor

}
function getRandomBtnColor(){
        let hexaColor2='#'
  
    for(let i=0;i<6;i++){
        hexaColor2+=hexaDecimal[Math.floor(Math.random() * 16)]
}
return hexaColor2

}
  
  return (
    <div className='color' style={{backgroundColor:color}}>
        <div className="btn"style={{backgroundColor:btnColor}} onClick={ChangeColor}>Generat</div>
      
    </div>
  )
}

export default Color
