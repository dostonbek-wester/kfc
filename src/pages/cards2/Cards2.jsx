import React from 'react'
import "./Cards2.css"
const Cards2 = () => {
  return (
    <div className='cards2'>
        <div className="left">
          <div><h2>Give us your feedback</h2></div>
          <div><h4>Rate your experience with us and help us become better.</h4></div>
          <div className='btnc'><button onCanPlay="https://u.kfcvisit.com/uzb" className='btn'>Rate us</button></div>
            
        </div>
        <div className="right">
          <div><h2>The 11 Ingredients</h2></div>
          <div><h4>What makes our food special.</h4></div>
          <div className='btnc'><button className='btn'>Discover them</button></div>
          
        </div>
    </div>
  )
}

export default Cards2