import React from 'react'
import { StyledUnits } from './styles/Units.styled'
import { data } from '../data'

function Units() {
    return (
        <StyledUnits>
            <div className="units__section">
                <div className="units__content">
                    <div className="units__message">
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