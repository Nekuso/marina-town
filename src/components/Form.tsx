import React from 'react';
import { StyledForm } from './styles/Form.styled';
import LeftBlob2 from '../img/LeftBlob2.png';
import Bubble1 from '../img/Bubble1.png';
import Bubble3 from '../img/Bubble2.png';
import RightLineBlob from '../img/RightLineBlob.png';

function Form() {
    return (
        <StyledForm>
            <div className="form__section">
                <img src={LeftBlob2} alt="LeftBlob2" className="left__blob_2" />
                <img src={Bubble1} alt="Bubble1" className="bubble1" />
                <img src={Bubble3} alt="Bubble3" className="bubble3" />
                <img src={RightLineBlob} alt="RightLineBlob" className="right__line__blob" />
                <div className="form__content">
                    <div className="form__message">
                        <h2>Let's get in touch</h2>
                        <p>Answer the form below to know more this<br/>
                        property. Let's get in touch</p>
                    </div>
                    <form action="">
                        <input type="text" required placeholder="First Name*"/>
                        <input type="text" required placeholder="Last Name*"/>
                        <input type="text" required placeholder="Mobile*"/>
                        <input type="text" required placeholder="Email*"/>
                        <textarea placeholder="Message*"/>
                        <button>SUBMIT</button>
                    </form>
                </div>
            </div>
        </StyledForm>
    )
}

export default Form