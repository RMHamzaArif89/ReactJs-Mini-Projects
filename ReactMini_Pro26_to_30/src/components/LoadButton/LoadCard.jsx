import React from 'react'

function LoadCard({price, h1 }) {
    return (
        <>
            <div className="load-card">
                <img src='' alt="" className="load-img" />
                <div className="load-h1">{h1}</div>
                <div className="load-price">{price}</div>

            </div>
        </>
    )
}

export default LoadCard
