import React, { useEffect } from 'react';
import { StyledHero } from './styles/Hero.styled';
import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function Hero() {

    const {ref, inView} = useInView({
        threshold: 0.2,
    });

    const animationSection = useAnimation();

    const HeroVariants = {
        hidden: {
            opacity: 0
        },
        
        visible: {
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                duration: .7,
                delay: .2
            }
        }
    }

    useEffect(() => {
        if (inView) {
            animationSection.start("visible")
        }
        else if(!inView) {
            animationSection.start("hidden")
        }
        
    },[animationSection, inView]);


    return (
        <motion.div
            ref={ref}
            variants={HeroVariants}
            initial="hidden"
            animate={animationSection}>

            <StyledHero>
                <div className="hero__section" id="Hero">
                    <div className="hero__text">
                        <div className="hero__brand">
                            <h2>Marina</h2>
                            <h2>Town</h2>
                        </div>
                        <div className="hero__subtitle">
                            <p>
                                A MODERN URBAN CENTER THAT<br/>
                                BECOMES A CITY IN ITS TRUEST SENSE
                            </p>
                        </div>
                        <div className="hero__button">
                            <a href="/"><i className='bx bxs-chevrons-right' ></i></a>
                            <p>SEE AVAILABLE<br/>
                                ROOMS
                            </p>
                        </div>
                    </div>
                </div>
            </StyledHero>
        </motion.div>
    )
}

export default Hero