import React, {useState} from 'react';
import { StyledNavbar } from './styles/Navbar.styled';
import { motion } from 'framer-motion';

const Navbar = () => {

    const [navActive, setNavActive] = useState("nav__links");
    const [btnActive, setBtnActive] = useState("nav__hamburger");
    const [btnHam, setBtnHam] = useState(false);

    const navToggle = () => {
        navActive === "nav__links" ? setNavActive("nav__links nav__active")
        : setNavActive("nav__links");

        btnActive === "nav__hamburger" ? setBtnActive("nav__hamburger is-active")
        : setBtnActive("nav__hamburger");

        btnHam === false ? setBtnHam(true) : setBtnHam(false);

    }

    const navVariants = {
        hidden: {
            opacity: 0,
            y: '-4vh'
        },

        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1
            }
        }
    }

    return (
        <StyledNavbar>

            <motion.ul 
                className={navActive}
                variants={navVariants}
                initial="hidden"
                animate="visible">
                <li><a href='/marina-town/#Hero' className="Link" onClick={navToggle}>HOME</a></li>
                <li><a href='/marina-town/#Popular' className="Link" onClick={navToggle}>FEATURES</a></li>
                <li><a href='/marina-town/#Feature' className="Link" onClick={navToggle}>SERVICES</a></li>
                <li><a href='/marina-town/#About' className="Link" onClick={navToggle}>ABOUT US</a></li>
            </motion.ul>

            <motion.button style={{
                position: btnHam ? "fixed" : "relative",
                top: btnHam ? 25 : 0,
                right: btnHam ? 25 : 0}} onClick={navToggle} className={btnActive}
                variants={navVariants}
                initial="hidden"
                animate="visible">
                <span></span>
                <span></span>
                <span></span>
            </motion.button>
        </StyledNavbar>
    );
}

export default Navbar;