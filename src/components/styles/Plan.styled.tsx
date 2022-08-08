import styled from 'styled-components';

export const StyledPlan = styled.div`
    .plan__section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: auto;
        padding: 1rem 0;
        position: relative;

        .left__blob {
            width: 250vw;
            position: absolute;
            top: -15%;
            left: 0;
            margin-left: -210vw;
            z-index: -1;
        }
        .bubble1 {
            position: absolute;
            width: 35vw;
            top: -5%;
            right: 0;
            margin-right: 5vw;
            z-index: -1;
        }
        .bubble3 {
            width: 70vw;
            position: absolute;
            right: 0;
            margin-right: 10vw;
            bottom: 5%;
            z-index: -1;
        }

        .plan__content {
            width: 85vw;
            margin: 0 auto;
            height: auto;
            
            h2 {
                font-size: 6vw;
                width: auto;
                text-align: center;
                margin: 0 auto 1rem;
            }

            .plan__container {
                width: 100%;
                height: auto;
                display: flex;
                flex-wrap: wrap;
                justify-items: center;
                align-items: center;
                gap: 2%;

                .plan__img {
                    width: 100%;
                    position: relative;
                    
                    img {
                        cursor: pointer;
                        width: 100%;
                        transition: 0.3s ease-in-out;
                        
                        &:hover {
                            transform: scale(1.1);
                        }
                    }
                }

                .plan__info {
                    text-align: start;
                    margin: 2rem auto;
                    text-align: center;
                    p {
                        font-size: 3vw;
                    }
                    p:nth-child(1) {
                        font-weight: 700;
                        font-size: 5vw;
                        margin: .5rem 0;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 768px) {
        .plan__section {

            .left__blob {
                width: 160vw;
                position: absolute;
                top: 40%;
                left: 0;
                margin-left: -130vw;
                z-index: -1;
            }
            .bubble1 {
                position: absolute;
                width: 25vw;
                top: 10%;
                right: 0;
                margin-right: 5vw;
                z-index: -1;
            }
            .bubble3 {
                width: 30vw;
                position: absolute;
                right: 0;
                margin-right: 5vw;
                bottom: -10%;
                z-index: -1;
            }

            .plan__content {
                margin: 2rem 0;
                width: 90vw;
                h2 {
                    font-size: 5vw;
                }

                .plan__container {
                    display: grid;
                    grid-template-columns: 60% 40%;

                    .plan__info {
                        text-align: start;
                        margin: 0 auto;

                        p {
                            font-size: 2vw;
                        }

                        p:nth-child(1) {
                            font-size: 2.5vw;
                            margin: .3rem 0;
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1000px) {
        .plan__section {
            height: 100vh;

            .left__blob {
                width: 160vw;
                position: absolute;
                top: 35%;
                left: 0;
                margin-left: -135vw;
                z-index: -1;
            }
            .bubble1 {
                position: absolute;
                width: 20vw;
                top: 20%;
                right: 0;
                margin-right: 15vw;
                z-index: -1;
            }

            .plan__content {
                width: 85vw;

                h2 {
                    font-size: 4vw;
                }

                .plan__container {
                    justify-content: center;
                    grid-template-columns: 55% 40%;
                    margin: 1.5rem 0;
                    
                    .plan__info {
                        p {
                            font-size: 1.5vw;
                        }

                        p:nth-child(1) {
                            font-size: 2.3vw;
                            margin: .5rem 0;
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1200px) {
        .plan__section {

            .left__blob {
                width: 160vw;
                position: absolute;
                top: 90%;
                left: 0;
                margin-left: -135vw;
                z-index: -1;
            }
            .bubble1 {
                position: absolute;
                width: 20vw;
                top: 33%;
                right: 0;
                margin-right: 20vw;
                z-index: -1;
            }
            .bubble3 {
                width: 30vw;
                position: absolute;
                right: 0;
                margin-right: 5vw;
                bottom: -55%;
                z-index: -1;
            }

            .plan__content {
                width: 80vw;
                h2 {
                    font-size: 4vw;
                }

                .plan__container {
                    justify-content: center;
                    grid-template-columns: 55% 40%;
                    margin: 1.5rem 0;
                    
                    .plan__info {
                        p {
                            font-size: 1.3vw;
                        }

                        p:nth-child(1) {
                            font-size: 2vw;
                            margin: .8rem 0;
                        }
                    }
                }
            }
        }
    }
`;