import React from 'react'
import img1 from './img1.webp'
import "./End2.css"
const End2 = () => {
  return (
    <div className='end2'>
        <div className="qator1">
            <div className="bir">
                
                <a href="https://kfc.com.uz/page/privacy-policy"><h4>Privacy Policy</h4></a>
                <a href="https://kfc.com.uz/page/terms"><h4>Terms & Conditions</h4></a>
            </div>
            <div className="ikki">
                <h3 className='ikkisoz'>© Copyright 2023 <span className='ikkisoz1'>KFC UZ</span> All Rights Reserved.</h3>
            </div>
            <div className="uch">
                <a href=""><img src={img1} alt="" /></a>
            </div>
        </div>
        <div className="qator2">
            <div id='div'></div>
            <div id='div'></div>
            <div id='div'></div> 
        </div>
    </div>
  )
}

export default End2