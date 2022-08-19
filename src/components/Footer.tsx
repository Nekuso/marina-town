import React from 'react'
import Logo from '../img/MarinaLogo.png'
import { StyledFooter } from './styles/Footer.styled'

function Footer() {
  return (
    <StyledFooter>
        <div className="footer__section">
            <div className="footer__content">
                <div className="footer__logo">
                    <img src={Logo} alt="Logo" />
                    <div className="footer__socials">
                        <a href="https://www.facebook.com/filinvestdumaguetecity/" rel="noopener noreferrer" target="_blank" ><i className='bx bxl-facebook-circle'></i></a>
                        <a href="https://www.instagram.com/p/CgVwFI0Olqm/" rel="noopener noreferrer" target="_blank" ><i className='bx bxl-instagram' ></i></a>
                        <a href="/" rel="noopener noreferrer" target="_blank" ><i className='bx bxl-twitter' ></i></a>
                        <a href="https://github.com/Nekuso" rel="noopener noreferrer" target="_blank" ><i className='bx bxl-github' ></i></a>
                    </div>
                </div>

                <div className="footer__links"> 
                    <div className="footer__navigation">
                        <h2>Navigation</h2>
                        <ul>
                            <li><a href='#Hero' className="Link">HOME</a></li>
                            <li><a href='#Info' className="Link">FEATURES</a></li>
                            <li><a href='#Service' className="Link">SERVICES</a></li>
                            <li><a href='#About' className="Link">ABOUT US</a></li>
                        </ul>
                    </div>
                    <div className="footer__company">
                        <h2>Company</h2>
                        <ul>
                            <li><a href='/' className="Link">Contact</a></li>
                            <li><a href='/' className="Link">Terms & Service</a></li>
                            <li><a href='/' className="Link">Privacy Policy</a></li>
                            <li><a href='/' className="Link">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </StyledFooter>
  )
}

export default Footer