import React from 'react'
import "./card.css"
import { Data } from "./data"
const card = () => {
  function text_uzunligi(text) {
    if(text.length > 159){
        return text.slice(0,161) + "..."
    }else{
        return text
    }
}
  return (
    <div className='card-container'>
      <div className="text">
        <div id='te'>

          <h2>Recommended</h2>
        </div>
        
      </div>
      <div className="card">{
      Data.map((item, index) => (
        <div className="box" >  
          <img className='box-img' src={item.img} alt="" />
          <h3 className='box-title'>{item.title}</h3>
          <h5 className='box-description'>{text_uzunligi(item.description)}</h5>
          <button className='buy'>{item.price}</button>
        </div>
      ))
      }
    

      
      </div>
      <div className="btns">

      <button className='btn1'>VIEW ALL SUGGESTIONS</button>
      </div>
    </div>
  )
}

export default card