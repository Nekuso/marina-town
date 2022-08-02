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
        height: 500px;

        .hero__text {
            display: grid;
            width: 80vw;
            .hero__brand {
                margin-bottom: 1.5rem;
                h2{
                    font-size: 19vw;
                    line-height: 4.3rem;
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
                    transition: .3s ease-in-out;
                    
                    &:hover {
                        transform: rotate(90deg);
                    }
                }

                p {
                    font-size: 4vw;
                }
            }
        }
    }

    @media screen and (min-width: 768px) {

        .hero__section {
            justify-content: start;
            align-items: center;
            height: 70vw;

            .hero__text {
                margin-left: 5rem;
                width: 50vw;
                .hero__brand {
                    margin-bottom: .5rem;
                    h2{
                        font-size: 11vw;
                    }
                }
                .hero__subtitle {
                    text-align: left;
                    p{
                        font-size: 2.5vw;
                    }
                }
                .hero__button {
                    margin: 1rem 0;
                    a {
                        font-size: 5vw;
                    }

                    p {
                        font-size: 2.5vw;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1000px) {
        .hero__section {
            height: 100vh;
            background-size: 100% 100%;

            .hero__text {
                margin-left: 4rem;
                width: 45vw;
                .hero__brand {
                    margin-bottom: .5rem;
                    h2{
                        line-height: 13vh;
                        font-size: 10vw;
                    }
                }
                .hero__subtitle {
                    text-align: left;
                    p{
                        font-size: 2.2vw;
                    }
                }
                .hero__button {
                    a {
                        font-size: 3vw;
                        padding: 1rem;
                    }
                    p {
                        font-size: 2vw;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1200px) {
        .hero__section {
            justify-content: start;
            align-items: center;
            height: 100vh;

            .hero__text {
                width: 450px;
                .hero__brand {
                    margin-bottom: .5rem;
                    h2{
                        font-size: 6.6rem;
                    }
                }
                .hero__subtitle {
                    text-align: left;
                    p{
                        font-size: 1.4rem;
                    }
                }
                .hero__button {
                    margin: 1rem 0;
                    a {
                        padding: 1rem;
                        font-size: 1rem;
                    }

                    p {
                        font-size: 1.3rem;
                    }
                }
            }
        }
    }
`