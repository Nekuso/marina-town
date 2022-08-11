import React, { useEffect } from 'react';
import { StyledForm } from './styles/Form.styled';
import LeftBlob2 from '../img/LeftBlob2.png';
import Bubble1 from '../img/Bubble1.png';
import Bubble3 from '../img/Bubble2.png';
import RightLineBlob from '../img/RightLineBlob.png';
import { useTransform, useSpring, useViewportScroll, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Form() {
    
    const {scrollY} = useViewportScroll();

    const y1 = useTransform(useSpring(scrollY, {stiffness: 30, damping: 15}), [0, 6500], [800, -200]);
    const y2 = useTransform(useSpring(scrollY, {stiffness: 20, damping: 10}), [0, 5700], [700, -120]);
    const y3 = useTransform(useSpring(scrollY, {stiffness: 30, damping: 15}), [0, 5600], [700, -150]);
    const y4 = useTransform(useSpring(scrollY, {stiffness: 30, damping: 15}), [0, 5700], [500, -150]);

    const {ref, inView} = useInView({
        threshold: 0.5,
    })

    const animation = useAnimation();
    const animationText1 = useAnimation();
    const animationText2 = useAnimation();
    const animationForm = useAnimation();

    useEffect(() => {
        if(inView) {
            animation.start("visible");
            animationText1.start("visibleText1");
            animationText2.start("visibleText2");
            animationForm.start("visibleForm");
        }
    },[animation, animationText1, animationText2, animationForm, inView])


    const FormVariable = {
        hidden: {
            opacity: 0,
            y: "50px"
        },

        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 60,
                duration: 1.6,
                delay: .3,
            }
        },
        visibleText1: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 60,
                duration: 1.6,
                delay: .6,
            }
        },
        visibleText2: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 60,
                duration: 1.6,
                delay: .8,
            }
        },
        visibleForm: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 60,
                duration: 1.6,
                delay: 1.1,
            }
        }
    }
    
    return (
        <StyledForm ref={ref}>
            <motion.div className="form__section"
                variants={FormVariable}
                initial="hidden"
                animate={animation}
            >
                <motion.img src={LeftBlob2} alt="LeftBlob2" className="left__blob__2" 
                style={{y: y1}}
                />
                <motion.img src={Bubble1} alt="Bubble1" className="bubble1" 
                style={{y: y2}}
                />
                <motion.img src={Bubble3} alt="Bubble3" className="bubble3" 
                style={{y: y3}}
                />
                <motion.img src={RightLineBlob} alt="RightLineBlob" className="right__line__blob" 
                style={{y: y4}}
                />
                <div className="form__content">
                    <div className="form__message">
                        <motion.h2
                            variants={FormVariable}
                            initial="hidden"
                            animate={animationText1}
                        >Let's get in touch</motion.h2>
                        <motion.p
                            variants={FormVariable}
                            initial="hidden"
                            animate={animationText2}
                        >Answer the form below to know more this<br/>
                        property. Let's get in touch</motion.p>
                    </div>
                    <motion.form action=""
                        variants={FormVariable}
                        initial="hidden"
                        animate={animationForm}
                    >
                        <input type="text" required placeholder="First Name*"/>
                        <input type="text" required placeholder="Last Name*"/>
                        <input type="text" required placeholder="Mobile*"/>
                        <input type="text" required placeholder="Email*"/>
                        <textarea placeholder="Message*"/>
                        <button>SUBMIT</button>
                    </motion.form>
                </div>
            </motion.div>
        </StyledForm>
    )
}

export default Form