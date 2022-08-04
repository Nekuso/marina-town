import React from 'react'
import { StyledPlan } from './styles/Plan.styled';
import SitePlan from '../img/SitePlan.png';

function Plan() {
    return (
        <StyledPlan>
            <div className="plan__section">
                <div className="plan__content">
                    <h2>Site Development Plan</h2>
                    <div className="plan__container">
                        <div className="plan__img">
                            <img src={SitePlan} alt="plan" />
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