import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Scrolltop = () => {
    const location = useLocation()
    useEffect(() => {
      window.scrollTo({
        top:0,
        behavior:"auto"
      })
    }, [location])
    
  return null
}

export default Scrolltop