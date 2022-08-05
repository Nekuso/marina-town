import React from 'react'
import { StyledHero } from './styles/Hero.styled'


function Hero() {


    return (
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
    )
}

export default Hero