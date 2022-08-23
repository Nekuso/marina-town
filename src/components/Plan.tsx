import React, { useEffect } from 'react'
import { StyledPlan } from './styles/Plan.styled';
import SitePlan from '../img/SitePlan.png';
import LeftBlob from '../img/LeftBlob.png';
import Bubble1 from '../img/Bubble1.png';
import Bubble3 from '../img/Bubble3.png';
import { useViewportScroll, useTransform, useSpring, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function Plan() {
    const {scrollY} = useViewportScroll();
    
    const y1 = useTransform(useSpring(scrollY, {stiffness: 30, damping: 15}), [0, 3500], [450, -100]);
    const y2 = useTransform(useSpring(scrollY, {stiffness: 40, damping: 15}), [0, 3000], [200, -200]);
    const y3 = useTransform(useSpring(scrollY, {stiffness: 40, damping: 15}), [0, 5300], [200, -200]);

    const {ref, inView} = useInView({
        threshold: 0.4,
    })
    
    const animationText1 = useAnimation();
    const animationText2 = useAnimation();
    const animationText3 = useAnimation();
    const animationImage = useAnimation();

    useEffect(() => {
        if(inView) {
            animationText1.start("visibleText1");
            animationText2.start("visibleText2");
            animationText3.start("visibleText3");
            animationImage.start("visibleImage");
        }
    },[animationText1, animationText2, animationText3, animationImage, inView])

    const PlanVariants = {
        hiddenText: {
            opacity: 0,
            y: "10px"
        },
        hiddenImage: {
            opacity: 0,
            x: "-50px"
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
                delay: .7,
            }
        },

        visibleImage: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 60,
                duration: 1.6,
                delay: .5,
            }
        }


    }
    
    return (
        <StyledPlan ref={ref}>
            <div className="plan__section">
                <motion.img src={LeftBlob} alt="LeftBlob" className="left__blob" 
                style={{y: y1}} />
                <motion.img src={Bubble1} alt="Bubble1" className="bubble1" 
                style={{y: y2}} />
                <motion.img src={Bubble3} alt="Bubble3" className="bubble3" 
                style={{y: y3}} />
                <div className="plan__content">
                    <motion.h2
                    variants={PlanVariants}
                    initial="hiddenText"
                    animate={animationText1}
                    exit="hiddenText"
                    >Site Development Plan</motion.h2>
                    <div className="plan__container">
                        <div className="plan__img">
                            <motion.div
                                variants={PlanVariants}
                                initial="hiddenImage"
                                animate={animationImage}
                                exit="hiddenImage"
                                >

                                <img src={SitePlan} alt="plan"/>
                            </motion.div>
                        </div>
                        <div className="plan__info">
                            <motion.p
                            variants={PlanVariants}
                            initial="hiddenText"
                            animate={animationText2}
                            exit="hiddenText"
                            >A well-Planned Community</motion.p>
                            <motion.p
                            variants={PlanVariants}
                            initial="hiddenText"
                            animate={animationText3}
                            exit="hiddenText"
                            >Situated within the 1.9-hectare Marina Town, Marina Spatial is a modern-contemporary themed community with 3 buildings, each 6 to 10 storeys high.</motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </StyledPlan>
    )
}

export default Plan;