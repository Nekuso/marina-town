import React, { useEffect } from 'react'
import { StyledService } from './styles/Service.styled'
import Service1 from '../img/Service1.png'
import Service2 from '../img/Service2.png'
import LeftLineBlob from '../img/LeftLineBlob.png'
import Bubble1 from '../img/Bubble2.png'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, useSpring, useTransform, useViewportScroll } from 'framer-motion'

function Service() {
    
    const {scrollY} = useViewportScroll();
    
    const y1 = useTransform(useSpring(scrollY, {stiffness: 30, damping: 15}), [0, 2500], [250, -300]);
    const y2 = useTransform(useSpring(scrollY, {stiffness: 40, damping: 15}), [0, 2200], [250, -100]);
    
    
    const {ref, inView} = useInView({
        threshold: 0.3,
    })

    const animationText = useAnimation();
    const animationText2 = useAnimation();
    const animationImage = useAnimation();
    const animationImage2 = useAnimation();
    const animationButton = useAnimation();

    useEffect(() => {
        if(inView) {
            animationText.start("visibleText");
            animationText2.start("visibleText2");
            animationImage.start("visibleImage");
            animationImage2.start("visibleImage2");
            animationButton.start("visibleButton");
        }
        
    },[animationText, animationText2, animationImage, animationImage2, inView])

    const ServiceVariants = {
        hiddenText: {
            opacity: 0,
            y: "30px"
        },
        hiddenImage: {
            opacity: 0,
            x: "-20px"
        },
        hiddenImage2: {
            opacity: 0,
            x: "20px"
        },

        visibleText: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 60,
                duration: 1.8,
                delay: .4,
            }
        },
        visibleText2: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 60,
                duration: 1.8,
                delay: .6,
            }
        },
        visibleButton: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 60,
                duration: 1.8,
                delay: .8,
            }
        },
        visibleImage: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 50,
                duration: 1.8,
                delay: .8,
            }
        },
        visibleImage2: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 50,
                duration: 1.8,
                delay: 1,
            }
        }
    }
    
    return (

        <StyledService>
            <motion.div className="service__container" id="Service" ref={ref}>
                <motion.img src={LeftLineBlob} alt="LeftLineBlob" className="left__line__blob" style={{y: y1}} />
                <motion.img src={Bubble1} alt="Bubble1" className="bubble1" style={{y: y2}} />
                <div className="service">
                    <motion.img src={Service1} alt="service1" className="service1"
                    variants={ServiceVariants}
                    initial="hiddenImage"
                    animate={animationImage}/>
                    <div className="service__message__container">
                        <div className="service__message">
                            <motion.h2 
                            variants={ServiceVariants} 
                            initial={"hiddenText"}
                            animate={animationText}
                            >WHAT YOU GET?</motion.h2>
                            <motion.p
                            variants={ServiceVariants}
                            initial={"hiddenText"}
                            animate={animationText2}
                            >you will get what you don't get anywhere else such as the cheapest
                                price in its class, guaranteed quality of goods, many types of rooms 
                                that we provide.
                            </motion.p>
                            <motion.div className="service__link"
                            variants={ServiceVariants}
                            initial={"hiddenText"}
                            animate={animationButton}
                            >
                                <a href="/">See more <mark>→</mark></a>
                            </motion.div>
                        </div>
                    </div>
                    <motion.img src={Service2} alt="service2" className="service2"
                    variants={ServiceVariants}
                    initial="hiddenImage2"
                    animate={animationImage2}/>
                </div>
            </motion.div>
        </StyledService>
    )
}

export default Service