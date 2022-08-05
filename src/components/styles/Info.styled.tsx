import styled from 'styled-components'

export const StyledInfo = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    .info__section {
        width: 100vw;
        height: auto;

        .info {
            width: 90vw;
            margin: 5rem auto 0;
            border-top: 5px solid #FFFFFFFF;
            padding-top: 1rem;

            .info__destination {
                width: 100%;
                .info__destination__container {
                    width: 100%;
                    h2 {
                        text-align: center;
                        font-size: 6vw;
                        font-weight: 800;
                    }
                    .info__destination__details {
                        display: flex;
                        margin: 1rem auto;
                        width: 100%;
                        flex-wrap: wrap;
    
                        .destination__details {
                            margin: 1rem auto;
                            text-align: center;
                            flex: 1 1 40%;
                            h3 {
                                font-size: 4vw;
                            }
                            p {
                                padding: .3rem 0;
                                font-size: 5vw;
                            }
                        }
                    }
                }
            }
            
            .info__message {
                display: grid;
                gap: 2rem;
                width: 100%;
                .message {
                    width: 100%;
                    p {
                        font-size: 4.5vw;
                    }
                }
            }
        }

        .reviews__container {
            display: flex;
            margin: 3rem auto;
            justify-content: space-between;
            width: 100%;

            .reviews {
                width: auto;
                margin: 0 auto;
                text-align: center;
                h2 {
                    font-size: 7vw;
                }
                p {
                    font-size: 3vw;
                }
            }
        }
    }

    @media screen and (min-width: 768px) {
        .info__section {
            height: auto;
            .info {
                padding-top: 3rem;
                justify-content: center;
                
                .info__destination {
                    display: grid;
                    justify-content: space-between;
                    grid-template-columns: 48% 50%;

                    .info__destination__container {
                        h2 {    
                            font-size: 3vw;
                            text-align: left;
                        }
                        .info__destination__details {
                            gap: 1rem;
                            .destination__details {
                                margin: .5rem 0;
                                text-align: start;
                                h3 {
                                    font-size: 2.5vw;
                                }
                                p {
                                    font-size: 2vw;
                                }
                            }
                        }
                    }
                }

                .info__message {
                    gap: .5rem;
                    .message {
                        p {
                            font-size: 2vw;
                        }
                    }
                }
            }

            .reviews__container {
                margin: 2.5rem 0;

                .reviews {
                    h2 {
                        font-size: 6vw;
                    }
                    p {
                        font-size: 2vw;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1000px) {
        .info__section {
            height: 100vh;

            .info {
                width: 85vw;
                justify-content: center;
                
                .info__destination {
                    .info__destination__container {
                        h2 {    
                            text-align: left;
                            font-size: 2.2rem;
                        }
                        .info__destination__details {
                            margin: 0 auto;
                            gap: 1rem;
                            .destination__details {
                                text-align: start;
                                h3 {
                                    font-size: 1.5vw;
                                }
                                p {
                                    font-size: 1.5vw;
                                }
                            }
                        }
                    }
                }

                .info__message {
                    gap: 1rem;
                    .message {
                        p {
                            font-size: 1.5vw;
                        }
                    }
                }
            }

            .reviews__container {
                margin: 2.5rem 0;

                .reviews {
                    h2 {
                        font-size: 7vw;
                    }
                    p {
                        font-size: 2.5vw;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1200px) {
        .info__section {
            .info {
                width: 80vw;
                justify-content: center;
                
                .info__destination {
                    .info__destination__container {
                        h2 {    
                            text-align: left;
                            font-size: 2.2rem;
                        }
                        .info__destination__details {
                            margin: 1.5rem auto;
                            gap: 1rem;
                            .destination__details {
                                text-align: start;
                                h3 {
                                    font-size: 2vw;
                                }
                                p {
                                    font-size: 1.5vw;
                                }
                            }
                        }
                    }
                }

                .info__message {
                    gap: 1rem;
                    .message {
                        p {
                            font-size: 1.7vw;
                        }
                    }
                }
            }

            .reviews__container {
                margin: 2.5rem 0;

                .reviews {
                    h2 {
                        font-size: 5vw;
                    }
                    p {
                        font-size: 1.7vw;
                    }
                }
            }
        }
    }
`