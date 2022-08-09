import React from 'react'
import { StyledLocation } from './styles/Location.styled';
import LocationImg from '../img/Location.png';
import LeftLineBlob from '../img/LeftLineBlob.png';
import Bubble2 from '../img/Bubble2.png';
import Bubble3 from '../img/Bubble3.png';

function Location() {
    
  return (
    <StyledLocation>
      <div className="location__section">
        <img src={LeftLineBlob} alt="LeftLineBlob" className="left__line_blob" />
        <img src={Bubble2} alt="Bubble2" className="bubble2" />
        <img src={Bubble3} alt="Bubble3" className="bubble3" />
        <div className="location__content">
          <h2>Location</h2>
          <div className="location__container">
            <div className="location__info">
              <div className="location__access">
                <p>Your Accessible Home</p>
                <p>Located in EJ Blanco Ave, Brgy. Piapi, Dumaguete City, Negros Oriental within the Marina Town development, Marina Spatial is near malls, schools and other essential destinations.</p>
              </div>
              <div className="location__landmarks">
                <p>Landmarks</p>
                <ul>
                  <li>• Sibulan Airport - 4.2 km</li>
                  <li>• Ang Tay Golf Course - 3.5 km</li>
                  <li>• Negros Oriental Provincial Hospital - 1.2 km</li>
                  <li>• Negros Oriental High School - 2.5 km</li>
                  <li>• Negros Oriental Provincial Capitol - 2.5 km</li>
                  <li>• BPI - 2.5 km</li>
                  <li>• RCBC - 2.5 km</li>
                </ul>
              </div>
            </div>
            <img src={LocationImg} alt="Location" />
          </div>

        </div>

      </div>
    </StyledLocation>
  )
}

export default Location