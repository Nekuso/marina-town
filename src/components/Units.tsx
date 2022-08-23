import React, { useEffect } from 'react'
import { StyledUnits } from './styles/Units.styled'
import { data } from '../data'
import RightLineBlob from '../img/RightLineBlob.png'
import Bubble3 from '../img/Bubble3.png'
import { useViewportScroll, useTransform, useSpring, motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


function Units() {

    const {scrollY} = useViewportScroll();
    
    const y1 = useTransform(useSpring(scrollY, {stiffness: 30, damping: 15}), [0, 2500], [450, -100]);
    const y2 = useTransform(useSpring(scrollY, {stiffness: 40, damping: 15}), [0, 3200], [200, -200]);
    
    const animationText = useAnimation();
    const animationText2 = useAnimation();
    const animationText3 = useAnimation();
    const animationImage = useAnimation();

    const {ref, inView} = useInView({
        threshold: 0.7,
    })

    useEffect(() => {
        if(inView) {
            animationText.start("visibleText");
            animationText2.start("visibleText2");
            animationText3.start("visibleText3");
            animationImage.start("visibleImage");
        }
        
    },[animationText, animationText2, animationText3, animationImage, inView])

    const UnitsVariants = {
        hiddenText: {
            opacity: 0,
            y: "10px"
        },
        hiddenText2: {
            opacity: 0,
            y: "20px"
        },
        hiddenText3: {
            opacity: 0,
            y: "30px"
        },
        hiddenImage: {
            opacity: 0,
            y:"70px"
        },

        visibleText: {
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
        visibleImage: {
            opacity: 1,
            y: 0,
        },
    }

    
    return (
        <StyledUnits>
            <div className="units__section" id="About" ref={ref}>
                <motion.img src={RightLineBlob} alt="RightLineBlob" className="right__line__blob" 
                style={{y: y1}} />
                <motion.img src={Bubble3} alt="Bubble3" className="bubble3"
                style={{y: y2}} />
                <div className="units__content">
                    <div className="units__message" >
                        <motion.h2 
                        variants={UnitsVariants}
                        initial="hiddenText"
                        animate={animationText}
                        exit="hiddenText"
                        >UNITS</motion.h2>
                        <motion.p
                        variants={UnitsVariants}
                        initial="hiddenText2"
                        animate={animationText2}
                        exit="hiddenText2"
                        >Space to Pursue Your Passions</motion.p>
                        <motion.p
                        variants={UnitsVariants}
                        initial="hiddenText3"
                        animate={animationText3}
                        exit="hiddenText3"
                        >Marina Spatial offers typical 2-bedroom units with open-plan<br/>
                        layouts for future expansions.</motion.p>
                    </div>

                    <div className="units__container">
                        {
                            data.map((unit, index) => (
                                <motion.div className="unit__item"
                                    variants={UnitsVariants}
                                        initial="hiddenImage"
                                        animate={animationImage}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 40,
                                            duration: 1.2,
                                            delay: index * 0.3,
                                        }}
                                        exit="hiddenImage">
                                    <div key={index} className="unit">
                                        <h2>{unit.name}</h2>
                                        <img src={unit.img} alt="" />
                                        <div className="unit__info">
                                            <p>{unit.area}</p>
                                            <p>{unit.features}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </StyledUnits>
    )
}

export default Units