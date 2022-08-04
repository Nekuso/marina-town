import styled from 'styled-components';

export const StyledUnits = styled.div`
    .units__section {
        display: grid;
        justify-items: center;
        align-items: center;
        width: 100vw;
        padding: 2rem 0;
        
        .units__content {
            width: 90vw;
            height: auto;
            margin: 0 auto;

            .units__message {
                margin: 0 auto;
                text-align: center;

                h2 {
                    font-size: 6vw;
                }

                p {
                    font-size: 2.3vw;
                }

                p:nth-child(3) {
                    margin: 1rem 0 1.5rem;
                    font-size: 2.5vw;
                }
            }

            .units__container {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: stretch;
                width: 100%;
                height: auto;
                gap: 1rem;
                
                .unit {
                    cursor: pointer;
                    display: grid;
                    justify-items: center;
                    flex: 1 1 35%;
                    padding: 1rem;
                    border: 1px solid #FFFFFF00;
                    background: #141313;
                    transition: 0.3s ease-in-out;
                    
                    h2{
                        font-size: 3.5vw;
                    }
                    
                    img {
                        width: 80%;
                        height: auto;
                        margin: 0 auto;
                    }
                    
                    .unit__info {
                        border-top: 1px solid white;
                        width: 100%;
                        p {
                            font-size: 2.3vw;
                        }
                        p:nth-child(1) {
                            padding: 1rem 0 0;
                            font-weight: 600;
                            font-size: 2.6vw;
                        }
                    }

                    &:hover {
                        transform: translate(-.5rem, -.5rem);
                        border: 1px solid #FFFFFF;
                        box-shadow: 10px 11px 0px 3px rgba(31,28,28,0.78);
                    }
                }
            }
        }
    }

    @media screen and (min-width: 768px) {
        .units__section {
            display: grid;
            justify-content: center;
            align-items: center;

            .units__content {
                .units__message {
                    h2 {
                        font-size: 7vw;
                    }

                    p {
                        font-size: 1.8vw;
                    }

                    p:nth-child(3) {
                        margin: 1rem 0 1.5rem;
                        font-size: 2vw;
                    }
                }

                .units__container {
                    .unit {
                        padding: 1.5rem;
                        flex: 0 0 30%;

                        h2 {
                            font-size: 2vw;
                        }

                        img {
                            width: 100%;
                        }

                        .unit__info {
                            p {
                                font-size: 1.1vw;
                            }

                            p:nth-child(1) {
                                padding: 1rem 0 .5rem;
                                font-weight: 600;
                                font-size: 2vw;
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1000px) {
        .units__section {
            height: 100vh;
            max-height: 100vh;
            .units__content {
                .units__message {
                    h2 {
                        font-size: 5vw;
                        line-height: 5vw;
                    }

                    p {
                        font-size: 1vw;
                    }

                    p:nth-child(3) {
                        margin: 1rem 0 1.5rem;
                        font-size: 1.2vw;
                    }
                }

                .units__container {
                    width: 70vw;
                    margin: 0 auto;
                    justify-content: space-between;

                    .unit {
                        flex: 0 0 30%;

                        h2 {
                            font-size: 1vw;
                        }

                        img {
                            width: 100%;
                        }

                        .unit__info {
                            p {
                                font-size: .8vw;
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1200px) {
        .units__section {
            .units__content {
                .units__message {
                    h2 {
                        font-size: 5vw;
                        line-height: 5vw;
                    }

                    p {
                        font-size: 1.1vw;
                    }

                    p:nth-child(3) {
                        margin: 1rem 0 1.5rem;
                        font-size: 1.3vw;
                    }
                }

                .units__container {
                    width: 65vw;
                    margin: 0 auto;
                    justify-content: space-between;

                    .unit {
                        flex: 0 0 30%;

                        h2 {
                            font-size: 1vw;
                        }

                        img {
                            width: 100%;
                        }

                        .unit__info {
                            p {
                                font-size: .9vw;
                            }
                            p:nth-child(1) {
                                padding: .5rem 0 .5rem;
                                font-weight: 800;
                                font-size: 1.6vw;
                            }
                        }

                        &:hover {
                            transform: translate(-.5rem, -.5rem);
                            border: 1px solid #FFFFFF;
                            box-shadow: 15px 15px 0px 3px rgba(31,28,28,0.78);
                        }
                    }
                }
            }
        }
    }
`