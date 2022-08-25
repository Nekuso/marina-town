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
    }
  }

  return (

    <StyledServicepage>
      <motion.div className="servicepage__container">
          <h1 id="Servicepage">
            Service
          </h1>
      </motion.div>
    </StyledServicepage>
  )
}

export default Servicepage;