import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './sidebar.css';
import Links from './Links';
import ToggleButton from './ToggleButton';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const closeSidebar = () => {
    setOpen(false);
  };

  const variants = {
    open: {
      clipPath: "circle(1800px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      }
    },
    closed: {
      clipPath: "circle(0px at 0px 0px)",
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40,
      }
    }
  };

  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
      <motion.div className='whole-bg' onClick={()=> setOpen(false)} >      
      <motion.div className='bg' variants={variants} >
        <Links handleClose={closeSidebar} />
      </motion.div>
      </motion.div>
      <ToggleButton setOpen={toggleSidebar} />
    </motion.div>
  );
};

export default Sidebar;

