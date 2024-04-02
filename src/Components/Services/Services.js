import React, { useRef } from 'react'
import './services.css'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from "react-router-dom"
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
  let navigate = useNavigate()
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div className='services' variants={variants} initial="initial" ref={ref} animate={"animate"}>
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
        <div className='card'>
          <div className='box'>
            <div className='content'>
              <h2>01</h2>
              <h3>Blockchain</h3>
              <p>
                Unlock the potential of blockchain technology with our services, providing secure and transparent solutions for your business needs.</p>
              <div className='box-button' onClick={() => navigate("/blockchain-page")}>Read More</div></div>
          </div>
        </div>
        <div className='card'>
          <div className='box'>
            <div className='content'>
              <h2>02</h2>
              <h3>3D Printing</h3>
              <p>
                Unlock the potential of blockchain technology with our services, providing secure and transparent solutions for your business needs.</p>
              <div className='box-button'>Read More</div></div>
          </div>

        </div>
        <div className='card'>
          <div className='box'>
            <div className='content'>
              <h2>03</h2>
              <h3>IOT</h3>
              <p>
                Unlock the potential of blockchain technology with our services, providing secure and transparent solutions for your business needs.</p>
              <div className='box-button' onClick={() => navigate("/iot-page")}>Read More</div></div>
          </div>

        </div>

      </motion.div>
    </motion.div>
  )
}

export default Services
