import React, { useEffect } from 'react';
import { StyledHero } from '../../../styles/Hero.styled';
import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function Hero() {

    const {ref, inView} = useInView({
        threshold: 0.1,
    });

    const animationSection = useAnimation();
    const animationText = useAnimation();
    const animationText2 = useAnimation();
    const animationText3 = useAnimation();
    const animationText4 = useAnimation();

    const HeroVariants = {
        hidden: {
            opacity: 0
        },

        hiddenText: {
            opacity: 0,
            y: "5vh"
        },
        
        visible: {
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                duration: .4,
                delay: .1
            }
        },

        visibleText: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 50,
                duration: 1.8,
                delay: .8,
            }
        },

        visibleText2: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 50,
                duration: 1.8,
                delay: .9,
            }
        },

        visibleText3: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 50,
                duration: 1.6,
                delay: 1.2,
            }
        },

        visibleText4: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 50,
                duration: 1.6,
                delay: 1.5,
            }
        }
    }

    useEffect(() => {
        if (inView) {
            animationSection.start("visible");
            animationText.start("visibleText");
            animationText2.start("visibleText2");
            animationText3.start("visibleText3");
            animationText4.start("visibleText4");
        }
        else if(!inView) {
            animationSection.start("hidden");
            animationText.start("hiddenText");
            animationText2.start("hiddenText");
            animationText3.start("hiddenText");
            animationText4.start("hiddenText");
        }
        
    },[animationSection, animationText, animationText2, animationText3, animationText4, inView]);


    return (
        <motion.div
            ref={ref}
            variants={HeroVariants}
            initial="hidden"
            animate={animationSection}
            exit="hidden"
            >

            <StyledHero>
                <div className="hero__section" id="Hero">
                    <div className="hero__text">
                        <div className="hero__brand">
                            <motion.h2
                            variants={HeroVariants}
                            initial="hiddenText"
                            animate={animationText}
                            exit="hiddenText"
                            >Marina</motion.h2>
                            <motion.h2
                            variants={HeroVariants}
                            initial="hiddenText"
                            animate={animationText2}
                            exit="hiddenText"
                            >Town</motion.h2>
                        </div>
                        <div className="hero__subtitle">
                            <motion.p
                            variants={HeroVariants}
                            initial="hiddenText"
                            animate={animationText3}
                            exit="hiddenText"
                            >
                                A MODERN URBAN CENTER THAT<br/>
                                BECOMES A CITY IN ITS TRUEST SENSE
                            </motion.p>
                        </div>
                        <motion.div className="hero__button"
                        variants={HeroVariants}
                        initial="hiddenText"
                        animate={animationText4}
                        exit="hiddenText"
                        >
                            <a href="/marina-town/#About"><i className='bx bxs-chevrons-right' ></i></a>
                            <p>SEE AVAILABLE<br/>
                                ROOMS
                            </p>
                        </motion.div>
                    </div>
                </div>
            </StyledHero>
        </motion.div>
    )
}

export default Hero