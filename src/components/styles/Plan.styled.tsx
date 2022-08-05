import styled from 'styled-components';

export const StyledPlan = styled.div`
    .plan__section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: auto;
        padding: 1rem 0;

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
                        width: 100%;
                    }
                }

                .plan__info {
                    text-align: start;
                    margin: 2rem auto;
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
            .plan__content {
                width: 90vw;
                h2 {
                    font-size: 5vw;
                }

                .plan__container {
                    display: grid;
                    grid-template-columns: 60% 40%;

                    .plan__info {
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
            .plan__content {

                h2 {
                    font-size: 5vw;
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
                            margin: .8rem 0;
                        }
                    }
                }
            }
        }
    }
`;