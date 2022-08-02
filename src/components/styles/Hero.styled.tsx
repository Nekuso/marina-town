import styled from 'styled-components'
import Hero from '../../img/Hero.png'

export const StyledHero = styled.div`

    .hero__section {
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(${Hero});
        background-size: cover;
        background-repeat: no-repeat;
        width: 100vw;
        height: 60vh;

        .hero__text {
            display: grid;
            width: 80vw;
            margin: 0 auto;
            .hero__brand {
                margin-bottom: 1.5rem;
                h2{
                    font-size: 19vw;
                    line-height: 4rem;
                    font-family: 'Ibarra Real Nova', serif;
                }

                h2:nth-child(2) {
                    text-align: right;
                }
            }
            .hero__subtitle {
                text-align: center;
                p{
                    font-size: 4vw;
                }
            }
            .hero__button {
                display: flex;
                justify-self: end;
                margin: .5rem 0;
                padding: .5rem 0;
                gap: 1rem;
                justify-content: center;
                align-items: center;
                border-top: 3px solid #fff;

                a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 100%;
                    padding: 2vw;
                    text-align: center;
                    font-size: 8vw;
                    border: 3px solid #FFFF;
                }
            }
        }
    }
`