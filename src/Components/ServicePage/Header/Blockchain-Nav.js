import React,{useState} from 'react'
import IOTLogo from '../../../Assets/Logo.jpg'
import './nav.css'
const NavItem = () => {
  const[color,Setcolor]=useState(false);
  const changeColor=()=>{
    if(window.scrollY>=90){
      Setcolor(true)
    }
    else{
      Setcolor(false)
    }
  }
  window.addEventListener('scroll', changeColor)
  return (
    <div className={color? 'iot-navbar iot-navbar-bg':'iot-navbar'}>
        <div className='iot-logo'>
            <img src={IOTLogo} alt=''/>
        </div>
        <div className='iot-navItems'>
            <a href=''>Features</a>
            <a href=''>How it works?</a>
            <a href=''>Use Cases</a>
        </div>
      
    </div>
  )
}

export default NavItem