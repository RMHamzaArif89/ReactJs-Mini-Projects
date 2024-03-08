import React from 'react'

function LoadCard({price, h1,img }) {
    return (
        <>
            <div className="load-card">
                <img src={img} alt="" className="load-img" />
                <div className="load-h1">{h1}</div>
                <div className="load-price">Price:{price}$</div>

            </div>
        </>
    )
}

export default LoadCard
