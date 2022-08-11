import React, { useEffect } from 'react'
import { StyledTour } from './styles/Tour.styled'
import RightLineBlob2 from '../img/RightLineBlob2.png'
import Bubble1 from '../img/Bubble1.png'
import { useViewportScroll, useTransform, useSpring, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Tour() {

    const {scrollY} = useViewportScroll();
    
    const y1 = useTransform(useSpring(scrollY, {stiffness: 30, damping: 15}), [0, 6500], [250, -100]);
    const y2 = useTransform(useSpring(scrollY, {stiffness: 40, damping: 15}), [0, 6000], [400, -200]);

    
    const {ref, inView} = useInView({
        threshold: 0.5,
    });

    const animationText1 = useAnimation();
    const animationImage = useAnimation();

    useEffect(() => {
        if(inView) {
            animationText1.start("visibleText");
            animationImage.start("visibleImage");
        }
    },[animationText1, animationImage, inView]);

    const TourVariants = {
        hidden: {
            opacity: 0,
            y: "40px"
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

        visibleImage: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 60,
                duration: 1.6,
                delay: .4,
            }
        }
    }

    
    return (
        <StyledTour ref={ref}>
            <div className="tour__section">
                <motion.img src={RightLineBlob2} alt="RightLineBlob2" className="right__line__blob_2" 
                    style={{y: y1}}
                />
                <motion.img src={Bubble1} alt="Bubble1" className="bubble1" 
                    style={{y: y2}}
                />
                <div className="tour__content">
                    <motion.h2
                        variants={TourVariants}
                        initial="hidden"
                        animate={animationText1}
                    >Virtual Tour</motion.h2>

                    <motion.div className="tour__container"
                        variants={TourVariants}
                        initial="hidden"
                        animate={animationImage}
                    >
                        <embed src="https://my.matterport.com/show/?m=H5oN9sTLfGC" type="" className="vr__tour"></embed>
                    </motion.div>
                </div>
            </div>
        </StyledTour>
    )
}

export default Tour