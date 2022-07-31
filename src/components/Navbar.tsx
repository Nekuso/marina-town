import React, { useState } from 'react'
import {StyledNavbar} from './styles/Navbar.styled'

function Navbar() {

  const [navActive, setNavActive] = useState("nav__links");
  const [btnActive, setBtnActive] = useState("nav__hamburger");
  const [btnHam, setBtnHam] = useState<boolean | string>(false);
  const [fixed, setFixed] = useState("fixed");



  return (
    <div className="navbar__container">
        <ul className="links__container">
            <li className="link"><a href="/">HOME</a></li>
            <li className="link"><a href="/">FEATURES</a></li>
            <li className="link"><a href="/">SERVICES</a></li>
            <li className="link"><a href="/">ABOUT US</a></li>
        </ul>

        <button 
          style={{
              position: btnHam && "fixed",
              top: btnHam ? 35 : "",
              right: btnHam ? 35 : "",
          }} 
          className={btnActive}>
          <span></span>
          <span></span>
          <span></span>
        </button>
    </div>
  )
}

export default Navbar