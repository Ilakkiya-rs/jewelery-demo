import React, { useRef } from 'react'
import './services.css'
import { motion, useInView } from 'framer-motion'
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}
const Services = () => {
  const ref=useRef();
  const isInView= useInView(ref,{margin:"-100px"});
  return (
    <motion.div className='services' variants={variants}  initial="initial"  ref={ref} animate={ "animate"}>
      <motion.div className='service-textContainer' variants={variants}>
        <p>
          we focus on helping your brand grow <br /> and move forward
        </p><hr />
      </motion.div>
      
        <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg?size=626&ext=jpg&ga=GA1.1.1314780943.1710201600&semt=sph' alt='' />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className='title'>
          <h1>
            <b>For your</b> Business.
          </h1>
          <div className='service-btn'> WHAT WE DO?</div>
        </div>
       
      </motion.div>
      <motion.div className='listContainer' variants={variants}>
        <motion.div className='box' whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Blockchain</h2>
          <p>
            
Unlock the potential of blockchain technology with our services, providing secure and transparent solutions for your business needs. Harness the power of decentralized ledgers to streamline operations and enhance trust in your transactions.</p>
<div className='box-button'>Go</div></motion.div>
        <motion.div className='box' whileHover={{ background: "lightgray", color: "black" }}>
          <h2>3D Printing</h2>
          <p>
          Elevate your projects with our cutting-edge 3D design services, crafted to bring your visions to life with precision and innovation. From concept to realization, we sculpt immersive experiences that redefine possibilities in architecture, gaming, and beyond.</p>
          <div className='box-button'>Go</div>
        </motion.div>
        <motion.div className='box' whileHover={{ background: "lightgray", color: "black" }}>
          <h2>IOT</h2>
          <p>
          Empower your devices with our IoT solutions, seamlessly connecting and optimizing your network for efficiency and intelligence. From smart homes to industrial automation, we tailor innovative IoT strategies to amplify productivity and unlock new realms of connectivity.</p>
          <div className='box-button'>Go</div>
        </motion.div>
       


      </motion.div>
    </motion.div>
  )
}

export default Services
