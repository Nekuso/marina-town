import React, { useEffect, useState } from 'react'
import { StyledUnits } from './styles/Units.styled'
import { data } from '../data'
import RightLineBlob from '../img/RightLineBlob.png'
import Bubble3 from '../img/Bubble3.png'

function Units() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <StyledUnits>
            <div className="units__section">
                <img src={RightLineBlob} alt="RightLineBlob" className="right__line__blob" />
                <img src={Bubble3} alt="Bubble3" className="bubble3" />
                <div className="units__content" id="About">
                    <div className="units__message" >
                        <h2>UNITS</h2>
                        <p>Space to Pursue Your Passions</p>
                        <p>Marina Spatial offers typical 2-bedroom units with open-plan<br/>
                        layouts for future expansions.</p>
                    </div>

                    <div className="units__container">
                        {
                            data.map((unit, index) => (
                                <div key={index} className="unit">
                                    <h2>{unit.name}</h2>
                                    <img src={unit.img} alt="" />
                                    <div className="unit__info">
                                        <p>{unit.area}</p>
                                        <p>{unit.features}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </StyledUnits>
    )
}

export default Units