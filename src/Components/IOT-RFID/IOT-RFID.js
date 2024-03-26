import React from 'react'
import NavItems from './IOT-Navbar/Nav'
import HeroIot from './HeroSection/HeroIot'
import IOTWork from './IOT-Works/IOTWork'
import Usecases from './IOT-Usecases/Usecases'
import Feature from './IOT-Features/feature'
import Testimonial from './Testimonial/Testimonial'
import Footer from '../Footer/Footer'

const IOTRFID = () => {
  return (
    <div className='iot-rfid'>
    <NavItems/>
    <HeroIot/>
   <Feature/>
    <IOTWork/>
    <Usecases/>
    <Testimonial/>
    <Footer/>
    </div>
  )
}

export default IOTRFID
