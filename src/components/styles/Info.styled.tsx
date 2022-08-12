import styled from 'styled-components'

export const StyledInfo = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    
    .info__section {
        width: 100%;
        height: auto;
        position: relative;
        
        .bubble1 {
            width: 70vw;
            position: absolute;
            left: 0;
            top: 5%;
            margin: 0 auto;
            margin-left: 10%;
        }
        .bubble2 {
            position: absolute;
            right: 0;
            top: 75%;
            margin: 0 auto;
            margin-right: 10%;
        }
        .bubble3 {
            width: 50vw;
            position: absolute;
            bottom: 35%;
            left: 0;
            margin: 0 auto;
            margin-left: 10%;
        }
        .rightblob {
            position: absolute;
            width: 150vw;
            right: 0;
            bottom: -17%;
            margin: 0 auto;
            margin-right: -115vw;
        }

        .indexed {
            z-index: -1;
        }

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
            
            .bubble1 {
                width: auto;
                position: absolute;
                left: 0;
                top: 2%;
                margin: 0 auto;
                margin-left: 5%;
            }
            .bubble2 {
                width: 20vw;
                position: absolute;
                right: 0;
                top: 6%;
                margin: 0 auto;
                margin-right: 10%;
            }
            .bubble3 {
                width: 30vw;
                position: absolute;
                bottom: 5%;
                left: 0;
                margin: 0 auto;
                margin-left: 2%;
            }
            .rightblob {
                position: absolute;
                width: 130vw;
                right: 0;
                bottom: -20%;
                margin: 0 auto;
                margin-right: -95vw;
            }
            
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
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        algin-items: center;
        .info__section {

            .bubble1 {
                width: 25vw;
                position: absolute;
                left: 0;
                top: 0;
                margin: 0 auto;
                margin-left: 15%;
            }
            .bubble2 {
                width: 25vw;
                position: absolute;
                top: 0;
                right: 0;
                margin: 0 auto;
                margin-right: 10%;
            }
            .bubble3 {
                width: 30vw;
                position: absolute;
                bottom: -5%;
                left: 0;
                margin: 0 auto;
                margin-left: 10%;
            }
            .rightblob {
                position: absolute;
                width: 130vw;
                right: 0;
                bottom: -40%;
                margin: 0 auto;
                margin-right: -100vw;
            }

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
            .bubble1 {
                width: 25vw;
                position: absolute;
                left: 0;
                top: 0;
                margin: 0 auto;
                margin-left: 5%;
            }
            .bubble2 {
                width: 20vw;
                position: absolute;
                right: 0;
                top: 0;
                margin: 0 auto;
                margin-right: 10%;
            }
            .bubble3 {
                width: 30vw;
                position: absolute;
                bottom: -15%;
                left: 0;
                margin: 0 auto;
                margin-left: 10%;
            }
            .rightblob {
                position: absolute;
                width: 120vw;
                right: 0;
                bottom: -50%;
                margin: 0 auto;
                margin-right: -95vw;
            }

            .info {
                width: 70vw;
                justify-content: center;
                
                .info__destination {
                    .info__destination__container {
                        h2 {    
                            text-align: left;
                            font-size: 2.2vw;
                        }
                        .info__destination__details {
                            margin: 1.5rem auto;
                            gap: 1rem;
                            .destination__details {
                                text-align: start;
                                h3 {
                                    font-size: 1.7vw;
                                }
                                p {
                                    font-size: 1.3vw;
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
                display: flex;
                justify-content: space-between;
                width: 70vw;
                margin: 2.5rem auto;

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