import React, { useEffect, useState } from 'react'
import { StyledTour } from './styles/Tour.styled'
import RightLineBlob2 from '../img/RightLineBlob2.png'
import Bubble1 from '../img/Bubble1.png'

function Tour() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    
    return (
        <StyledTour>
            <div className="tour__section">
                <img src={RightLineBlob2} alt="RightLineBlob2" className="right__line__blob_2"
                style={{ transform: `translateY(-${offsetY * 0.2}px)` }} />
                <img src={Bubble1} alt="Bubble1" className="bubble1"
                style={{ transform: `translateY(-${offsetY * 0.2}px)` }} />
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