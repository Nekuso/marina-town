import React from 'react'
import { StyledTour } from './styles/Tour.styled'

function Tour() {
    return (
        <StyledTour>
            <div className="tour__section">
                <div className="tour__content">
                    <h2>Virtual Tour</h2>

                    <div className="tour__container">
                        <embed src="https://my.matterport.com/show/?m=H5oN9sTLfGC" type="" className="vr__tour"></embed>
                    </div>
                </div>
            </div>
        </StyledTour>
    )
}

export default Tour