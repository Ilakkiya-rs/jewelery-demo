import React from 'react'
import './navbar.css'
import { motion } from 'framer-motion'
import Facebook from '../../Assets/facebook.png'
import Instagram from '../../Assets/instagram.png'
import Sidebar from '../Sidebar/Sidebar'
import Logo from '../../Assets/Logo.jpg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{ duration: 0.5 }}>
          <img src={Logo} alt='' />
          BQTech
        </motion.span>
        {/* <div className='social'>
          <a href=''><img src={Instagram} alt='' /></a>
          <a href=''><img src={Facebook} alt='' /></a>
        </div> */}
      </div>
    </div>
  )
}

export default Navbar
