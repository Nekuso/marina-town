import styled from 'styled-components';

export const StyledLocation = styled.div `
    .location__section {
        display: grid;
        justify-content: center;
        align-items: center;
        width: 100vw;

        .location__content {
            width: 90vw;
            height: auto;
            margin: 1rem auto;

            h2 {
                text-align: center;
                font-size: 6vw; 
            }
            
            .location__container {
                display: grid;
                justify-content: center;
                align-items: center;
                gap: 2rem;
                width: 100%;
                height: auto;
                
                .location__info {
                    display: grid;
                    justify-content: center;
                    align-items: center;
                    gap: 2%;
                    height: auto;
                    .location__access {
                        p{
                            font-size: 3vw;
                        }

                        p:nth-child(1){
                            font-weight: 700;
                            font-size: 4vw;
                            margin: .5rem 0;
                        }
                    }

                    .location__landmarks{
                        p{
                            font-weight: 700;
                            font-size: 4vw;
                            margin: .5rem 0;
                        }

                        ul {
                            li {
                                font-size: 3vw;
                            }
                        }
                    }
                }

                img {
                    width: 100%;
                }
            }
        }
    }

    @media screen and (min-width: 768px) {
        .location__section {
            .location__content {
                margin: 0 auto;
                width: 85vw;
                h2{
                    font-size: 5vw;
                }

                .location__container {
                    justify-content: space-between;
                    align-items: start;
                    margin: 1rem auto;
                    grid-template-columns: 50% 45%;

                    .location__info {
                        gap: 4%;
                        .location__access {
                            p{
                                font-size: 1.5vw;
                            }
                            p:nth-child(1){
                                font-weight: 700;
                                font-size: 3vw;
                                margin: .5rem 0;
                            }
                        }

                        .location__landmarks{
                            p{
                                font-weight: 700;
                                font-size: 3vw;
                            }
                            ul {
                                li {
                                    font-size: 1.5vw;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1000px) {
        .location__section {
            height: 100vh;
            .location__content {
                width: 85vw;
                h2{
                    font-size: 5vw;
                }

                .location__container {
                    align-items: start;
                    grid-template-columns: 50% 35%;

                    .location__info {
                        gap: 3%;
                        .location__access {
                            p{
                                font-size: 1.5vw;
                            }
                            p:nth-child(1){
                                font-size: 2.5vw;
                                margin: .3rem 0;
                            }
                        }

                        .location__landmarks{
                            p{
                                font-size: 2.5vw;
                                margin: .3rem 0;
                            }
                            ul {
                                li {
                                    font-size: 1.5vw;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1200px) {
        .location__section {
            .location__content {
                width: 70vw;
                h2{
                    font-size: 4vw;
                }
                
                .location__container {
                    align-items: start;
                    grid-template-columns: 60% 35%;

                    .location__info {
                        .location__access {
                            p{
                                font-size: 1.2vw;
                            }
                            p:nth-child(1){
                                font-size: 2.3vw;
                                margin: .3rem 0;
                            }
                        }

                        .location__landmarks{
                            p{
                                font-size: 2.3vw;
                                margin: .3rem 0;
                            }
                            ul {
                                li {
                                    font-size: 1.2vw;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`