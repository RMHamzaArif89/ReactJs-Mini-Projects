import React, { useLayoutEffect, useState } from 'react'
import './wwh.css'

function Wwh() {
    let [len, setLen] = useState({
        width: '',
        height: ''
    })
    let wResize = () => {
        let w = (window.innerWidth);
        let h = (window.innerHeight);
        setLen({
            width: w,
            height: h
        })

    }
    useLayoutEffect(() => {
        wResize
        window.addEventListener('resize', wResize)

        return () => {
            window.removeEventListener('resize', wResize)
        }
    }, [])
    return (
        <>
            <div className='wwh'>
                
                <div className="wwh-con">
                <div className="wwh-length">{len.width}</div>
                <div className="wwh-length">{len.height}</div>

                </div>
            </div>




        </>


    )
}

export default Wwh
