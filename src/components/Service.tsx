import React from 'react'
import { StyledService } from './styles/Service.styled'
import Service1 from '../img/Service1.png'
import Service2 from '../img/Service2.png'

function Service() {
    return (
        <StyledService>
            <div className="service__container">
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