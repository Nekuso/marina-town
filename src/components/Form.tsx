import React from 'react'
import { StyledForm } from './styles/Form.styled'

function Form() {
    return (
        <StyledForm>
            <div className="form__section">
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