import React, { useEffect } from 'react'
import { StyledLocation } from './styles/Location.styled';
import LocationImg from '../img/Location.png';
import LeftLineBlob from '../img/LeftLineBlob.png';
import Bubble2 from '../img/Bubble2.png';
import Bubble3 from '../img/Bubble3.png';
import { useViewportScroll, useTransform, useSpring, useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Location() {

  const {scrollY} = useViewportScroll();
    
  const y1 = useTransform(useSpring(scrollY, {stiffness: 30, damping: 15}), [0, 5500], [550, -200]);
  const y2 = useTransform(useSpring(scrollY, {stiffness: 30, damping: 15}), [0, 5200], [300, -200]);
  const y3 = useTransform(useSpring(scrollY, {stiffness: 30, damping: 15}), [0, 5200], [500, -150]);
    
  const {ref, inView} = useInView({
    threshold: 0.4,
  })
  
  const animationText = useAnimation();
  const animationText1 = useAnimation();
  const animationText2 = useAnimation();
  const animationText3 = useAnimation();
  const animationText4 = useAnimation();
  const animationImage = useAnimation();

  useEffect(() => {
      if(inView) {
          animationText.start("visibleText");
          animationText1.start("visibleText1");
          animationText2.start("visibleText2");
          animationText3.start("visibleText3");
          animationText4.start("visibleText4");
          animationImage.start("visibleImage");
      }
  },[animationText, animationText1, animationText2, animationText3, animationText4, animationImage, inView])


  const LocationVariants = {
    hiddenText: {
      opacity: 0,
      y: "10px"
    },
    hiddenImage: {
      opacity: 0,
      x: "50px"
    },

    visibleText: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        duration: 1.6,
        delay: .2,
      }
    },

    visibleText1: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        duration: 1.6,
        delay: .4,
      }
    },
    
    visibleText2: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        duration: 1.6,
        delay: .6,
      }
    },
    visibleText3: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        duration: 1.6,
        delay: .8,
      }
    },
    visibleText4: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        duration: 1.6,
        delay: 1,
      }
    },

    visibleImage: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        duration: 1.6,
        delay: 1.2,
      }
    }

  }


  return (
    <StyledLocation ref={ref}>
      <div className="location__section">
        <motion.img src={LeftLineBlob} alt="LeftLineBlob" className="left__line_blob"
          style={{y: y1}}
        />
        <motion.img src={Bubble2} alt="Bubble2" className="bubble2"
          style={{y: y2}}
        />
        <motion.img src={Bubble3} alt="Bubble3" className="bubble3"
          style={{y: y3}}
        />
        <div className="location__content">
          <motion.h2
            variants={LocationVariants}
            initial="hiddenText"
            animate={animationText}
          >Location</motion.h2>
          <div className="location__container">
            <div className="location__info">
              <div className="location__access">
                <motion.p 
                  variants={LocationVariants}
                  initial="hiddenText"
                  animate ={animationText1}
                >Your Accessible Home</motion.p>
                <motion.p 
                  variants={LocationVariants}
                  initial="hiddenText"
                  animate ={animationText2}
                >Located in EJ Blanco Ave, Brgy. Piapi, Dumaguete City, Negros Oriental within the Marina Town development, Marina Spatial is near malls, schools and other essential destinations.</motion.p>
              </div>
              <div className="location__landmarks">
                <motion.p
                  variants={LocationVariants}
                  initial="hiddenText"
                  animate ={animationText3}
                >Landmarks</motion.p>
                <motion.ul
                  variants={LocationVariants}
                  initial="hiddenText"
                  animate ={animationText4}
                >
                  <li>• Sibulan Airport - 4.2 km</li>
                  <li>• Ang Tay Golf Course - 3.5 km</li>
                  <li>• Negros Oriental Provincial Hospital - 1.2 km</li>
                  <li>• Negros Oriental High School - 2.5 km</li>
                  <li>• Negros Oriental Provincial Capitol - 2.5 km</li>
                  <li>• BPI - 2.5 km</li>
                  <li>• RCBC - 2.5 km</li>
                </motion.ul>
              </div>
            </div>
            <motion.img src={LocationImg} alt="Location" 
              variants={LocationVariants}
              initial="hiddenImage"
              animate ={animationImage}
            />
          </div>

        </div>

      </div>
    </StyledLocation>
  )
}

export default Location