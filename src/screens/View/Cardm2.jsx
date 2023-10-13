import React from 'react'
import { DataB } from './ViewD'
import './View.css'
const Cardm2 = ({main,handleClickOpen}) => {
  function deslength(ftitle) {
    if (ftitle.length > 80) {
      return ftitle.slice(0, 80) + "...";
    } else {
      return ftitle;
    }}
  return (
    <div className='blocks' id={main}>
    <h2 className='namem'>Recommended</h2>
    <div className="menu-cards">
      {
        DataB.map((item, index) => {
          return (
            <div className="boxr">
              <img src={item.image} className='boxrimg' alt="" />
              <h1 className='titr'>{item.title}</h1>
              <h3 className='desr'>{deslength(item.description)}</h3>
              <button className='btnr' onClick={()=>handleClickOpen(item)}>{item.price}</button>
            </div>
          )
        })
      }
    </div>
  </div>
  )
}

export default Cardm2