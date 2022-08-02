import React from 'react'
import {StyledInfo} from './styles/Info.styled'

function Info() {

    return (
        <StyledInfo>
            <div className="info__section">
                <div className="info">
                    <div className="info__destination">
                        <div className="info__destination__container">
                            <h2>A LIFESTYLE DESTINATION</h2>
                            <div className="info__destination__details">
                                <div className="destination__details">
                                    <h3>PROJECT TYPE</h3>
                                    <p>Mid-Rise Condo</p>
                                </div>
                                <div className="destination__details">
                                    <h3>UNIT AREA</h3>
                                    <p>20 - 64 sqm ±</p>
                                </div>
                                <div className="destination__details">
                                    <h3>PRICE RANGE</h3>
                                    <p>PHP 1.94M - 6.29M</p>
                                </div>
                            </div>
                        </div>
                        <div className="info__message">
                            <div className="message">
                                <p>
                                    Give your family the freedom to live life to the fullest 
                                    at Marina Spatial, a mid-rise condo community that
                                    enjoys an enviable location near Dumaguete Bay, 
                                    within the dynamic, mixed-use Marina Town 
                                    development.
                                </p>
                            </div>
                            <div className="message">
                                <p>
                                    With modern units, generous common areas and 
                                    refreshing landscapes, a vibrant lifestyle is in store 
                                    for the whole family. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reviews__container">
                    <div className="reviews">
                        <h2>+20K</h2>
                        <p>Rooms Ready</p>
                    </div>
                    <div className="reviews"> 
                        <h2>+50K</h2>
                        <p>Costumers</p>
                    </div>
                    <div className="reviews">
                        <h2>+100K</h2>
                        <p>Reviews</p>
                    </div>
                </div>

            </div>
        </StyledInfo>
    )
}

export default Info