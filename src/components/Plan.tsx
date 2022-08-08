import React, { useEffect, useState } from 'react'
import { StyledPlan } from './styles/Plan.styled';
import SitePlan from '../img/SitePlan.png';
import LeftBlob from '../img/LeftBlob.png';
import Bubble1 from '../img/Bubble1.png';
import Bubble3 from '../img/Bubble3.png';


function Plan() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <StyledPlan>
            <div className="plan__section">
                <img src={LeftBlob} alt="LeftBlob" className="left__blob"
                style={{ transform: `translateY(-${offsetY * 0.2}px)` }} />
                <img src={Bubble1} alt="Bubble1" className="bubble1"
                style={{ transform: `translateY(-${offsetY * 0.08}px)` }} />
                <img src={Bubble3} alt="Bubble3" className="bubble3"
                style={{ transform: `translateY(-${offsetY * 0.12}px)` }} />
                <div className="plan__content">
                    <h2>Site Development Plan</h2>
                    <div className="plan__container">
                        <div className="plan__img">
                            <img src={SitePlan} alt="plan"/>
                        </div>
                        <div className="plan__info">
                            <p>A well-Planned Community</p>
                            <p>Situated within the 1.9-hectare Marina Town, Marina Spatial is a modern-contemporary themed community with 3 buildings, each 6 to 10 storeys high.</p>
                        </div>
                    </div>
                </div>
            </div>
        </StyledPlan>
    )
}

export default Plan;