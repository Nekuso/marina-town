import React, { useEffect } from 'react';
import {StyledInfo} from './styles/Info.styled';
import Bubble1 from '../img/Bubble1.png';
import Bubble2 from '../img/Bubble2.png';
import RightBlob from '../img/RightBlob.png';
import { motion, useViewportScroll, useTransform, useSpring, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function Info() {

    const {scrollY} = useViewportScroll(); 
    
    const y1 = useTransform(useSpring(scrollY, {stiffness: 40, damping: 15}), [0, 1500], [50, -100]);
    const y2 = useTransform(useSpring(scrollY, {stiffness: 50, damping: 15}), [0, 1200], [160, -100]);
    const y3 = useTransform(useSpring(scrollY, {stiffness: 60, damping: 15}), [0, 2000], [100, -100]);
    const y4 = useTransform(useSpring(scrollY, {stiffness: 30, damping: 15}), [0, 2500], [100, -400]);
    
    const {ref, inView} = useInView({
        threshold: 0.4,
    })

    const animationText = useAnimation();
    const animationText2 = useAnimation();

    useEffect(() =>{
        if(inView){
            animationText.start("visibleText");
            animationText2.start("visibleText2");
        }
    },[animationText, animationText2, inView])

    const InfoVariants = {
        hidden: {
            opacity: 0,
            y: "15vh"
        },
        visibleText: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 40,
                duration: .6,
                delay: .2,
            }
        },
        visibleText2: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 40,
                duration: .6,
                delay: .5,
            }
        }
    }

    return (

        <StyledInfo>
            <div className="info__section" id="Info">
                <motion.img src={Bubble1} alt="Bubble1" className="bubble1 indexed" style={{y: y1}} />
                <motion.img src={Bubble2} alt="Bubble2" className="bubble2 indexed" style={{y: y2}} />
                <motion.img src={Bubble1} alt="Bubble3" className="bubble3 indexed" style={{y: y3}} />
                <motion.img src={RightBlob} alt="RightBlob" className="rightblob indexed" style={{y: y4}}/>

                <motion.div className="info" ref={ref} 
                variants={InfoVariants}
                initial="hidden"
                animate={animationText}>
                    <div className="info__destination">
                        <div className="info__destination__container" >
                            <h2>A LIFESTYLE DESTINATION</h2>
                            <div className="info__destination__details">
                                <div className="destination__details">
                                    <h3>PROJECT TYPE</h3>
                                    <p>Mid-Rise Condo</p>
                                </div>
                                <div className="destination__details">
                                    <h3>UNIT AREA</h3>
                                    <p>20 - 64 sqm ±</p>
                                </div>
                                <div className="destination__details">
                                    <h3>PRICE RANGE</h3>
                                    <p>PHP 1.94M - 6.29M</p>
                                </div>
                            </div>
                        </div>
                        <div className="info__message">
                            <div className="message">
                                <p>
                                    Give your family the freedom to live life to the fullest 
                                    at Marina Spatial, a mid-rise condo community that
                                    enjoys an enviable location near Dumaguete Bay, 
                                    within the dynamic, mixed-use Marina Town 
                                    development.
                                </p>
                            </div>
                            <div className="message">
                                <p>
                                    With modern units, generous common areas and 
                                    refreshing landscapes, a vibrant lifestyle is in store 
                                    for the whole family. 
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="reviews__container"
                    variants={InfoVariants}
                    initial="hidden"
                    animate={animationText2}>
                    <div className="reviews">
                        <h2>+20K</h2>
                        <p>Rooms Ready</p>
                    </div>
                    <div className="reviews"> 
                        <h2>+50K</h2>
                        <p>Costumers</p>
                    </div>
                    <div className="reviews">
                        <h2>+100K</h2>
                        <p>Reviews</p>
                    </div>
                </motion.div>
            </div>
        </StyledInfo>
    )
}

export default Info