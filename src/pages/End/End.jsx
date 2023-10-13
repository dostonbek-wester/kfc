import React from 'react'
import "./End.css"
import img1 from "./phone.png"
import telegram from "./teleggram.png"
import uzum from "./uzumtezor.png"
import yandex from "./yaandex.png"
import express from "./expres.png"

const End = () => {
  return (
    <div className='end'>
        
        <div className="phoneimg">
            <img className='phone' src={img1} alt="" />
        </div>
        <div className="link">
            <div>

            <h1 className='h1'>Enjoy KFC at your place!</h1>
            </div>
            <div>

            <h3 className='h3'>Delivery orders are currently served through</h3>
            </div>
            <div className="tarmoqlar">
                <a href="https://play.google.com/store/apps/details?id=uz.uzum.tezkor&hl=ru&gl=US"><img id='imgs' className='' src={uzum} alt="" /></a>
                <a href="https://play.google.com/store/apps/details?id=ru.foodfox.client&hl=ru&gl=US"><img id='imgs' className='' src={yandex} alt="" /></a>
                <a href="https://play.google.com/store/apps/details?id=com.uznewmax.theflash"><img id='imgs' className='' src={express} alt="" /></a>
                <a href="https://t.me/kfcuzdeliverybot"><img id='imgs' className='' src={telegram} alt="" /></a>  
            </div>
        </div>
        
    </div>
    // 500 ga  435
  )
}

export default End