import React from 'react';
import { motion } from 'framer-motion';
import './sidebar.css';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const ItemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ handleClose }) => {
  const items = ["HomePage", "Services", "Works", "About", "Contact"];

  const handleClick = () => {
    handleClose(); 
  };

  return (
    <motion.div className='links' variants={variants}>
      {items.map(item => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={ItemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick} 
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
