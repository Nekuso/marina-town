import { motion } from 'framer-motion';
import React from 'react'
import { StyledServicepage } from '../../styles/Servicepage.styled';

function Servicepage() {

  const ServicePageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1
      }
    }
  }

  return (

    <StyledServicepage>
      <motion.div className="servicepage__container"
        variants={ServicePageVariants}
        initial="hidden"
        animate="visible"
        exit="exit">
      </motion.div>
    </StyledServicepage>
  )
}

export default Servicepage;