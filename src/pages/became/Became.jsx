import React from 'react'
import "./became.css"
import founder from "./founder3.jpg"
const Became = () => {
  return (
    <div className='became'>
        <img className='founderimg' src={founder} alt="" />
        <h2 className="becameh2">How chicken became KFC</h2>
        <button className='btn2'>
            Learn about our history
        </button>
    </div>
  )
}

export default Became