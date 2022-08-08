import React, { useEffect, useState } from 'react'
import { StyledService } from './styles/Service.styled'
import Service1 from '../img/Service1.png'
import Service2 from '../img/Service2.png'
import LeftLineBlob from '../img/LeftLineBlob.png'
import Bubble1 from '../img/Bubble2.png'

function Service() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <StyledService>
            <div className="service__container" id="Service">
                <img src={LeftLineBlob} alt="LeftLineBlob" className="left__line__blob"
                style={{ transform: `translateY(-${offsetY * 0.17}px)` }} />
                <img src={Bubble1} alt="Bubble1" className="bubble1"
                style={{ transform: `translateY(-${offsetY * 0.07}px)` }} />
                <div className="service">
                    <img src={Service1} alt="service1" className="service1"/>
                    <div className="service__message__container">
                        <div className="service__message">
                            <h2>WHAT YOU GET?</h2>
                            <p>you will get what you don't get anywhere else such as the cheapest
                                price in its class, guaranteed quality of goods, many types of rooms 
                                that we provide.
                            </p>
                            <div className="service__link">
                                <a href="/">See more <mark>→</mark></a>
                            </div>
                        </div>
                    </div>
                    <img src={Service2} alt="service2" className="service2"/>
                </div>
            </div>
        </StyledService>
    )
}

export default Service