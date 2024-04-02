import React, { useState } from 'react'
import IOTLogo from '../../../Assets/Logo.jpg'
import './nav.css'
const NavItems = () => {

  const [color, Setcolor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      Setcolor(true)
    }
    else {
      Setcolor(false)
    }
  }
  window.addEventListener('scroll', changeColor)
  return (

    <div className={color ? 'iot-navbar iot-navbar-bg' : 'iot-navbar'}>
      <div className='iot-logo'>
        <img src={IOTLogo} alt='' />
      </div>
      <div className='iot-navItems'>
        <a href='#features'>Features</a>
        <a href='#iot-works'>About</a>
        <a href='#use-cases'>Use Cases</a>
      </div>

    </div>

  )
}

export default NavItems
