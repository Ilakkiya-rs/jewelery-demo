import React from 'react'
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import Blockchain from '../../Assets/Animation.json';
import './home.css'
import scroll from '../../Assets/scroll.png'
import { useNavigate } from "react-router-dom"
const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 0,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};
const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 20,
        }
    },
};

const Home = () => {
    let navigate = useNavigate()
    return (
        <div className='home'>
            <div className='wrap'>
                <motion.div className='textContainer' variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>Join. Explore. Evolve.</motion.h2>
                    <Lottie animationData={Blockchain} loop={true} className='homepage-image' />
                    <motion.h1 variants={textVariants}>Unraveling the mysteries of tomorrow with Blockchain's encryption and IoT's communication.</motion.h1>
                    <motion.div variants={textVariants} className='buttons'>
                        <motion.div variants={textVariants} className='button1' onClick={() => navigate("/product-categories")}>See the Latest Products</motion.div>
                        <motion.div variants={textVariants} className='button2'onClick={() => navigate("/calendly")}>Meeting Scheduler</motion.div>
                    </motion.div>
                    <motion.img variants={textVariants} animate='scrollButton' src={scroll} alt='' />
                </motion.div>
            </div>
            <motion.div className='slidingTextContainer'
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                BQTECH
            </motion.div>
            <motion.div className='imageContainer' variants={textVariants}
                initial="initial"
                animate="animate">
                <Lottie animationData={Blockchain} loop={true} className='lottie-image' />

            </motion.div>

        </div>
    )
}

export default Home
