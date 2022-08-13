import styled from 'styled-components';

export const StyledService = styled.div`

    .service__container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 35vh;
        margin: 1rem auto;
        position: relative;

        .left__line__blob {
            position: absolute;
            width: 70vw;
            left: 0;
            margin-left: -20vw;
            bottom: -70%;
            z-index: -1;
        }

        .bubble1 {
            position: absolute;
            right: 5%;
            bottom: -70%;
            width: 65vw;
            z-index: -1;
        }
        
        .service {
            display: grid;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            grid-template-columns: 38% 27% 27%;
            grid-template-rows: auto;
            grid-template-areas:
                "service1 message message"
                "service1 message message"
                "service1 service2 service2";
            ;
            width: 90vw;
            height: auto;
            margin: 0 auto;

            img {
                width: 100%;
                height: 100%;
                border-radius: .5rem;
            }

            .service1 {
                grid-area: service1;
            }

            .service2 {
                grid-area: service2;
            }
            .service__message__container {
                display: flex;
                height: 100%;
                justify-content: center;
                align-items: center;
                grid-area: message;
                
                .service__message {
                    display: grid;
                    height: 100%;
                    justify-content: space-between;
                    width: 100%;

                    h2 {
                        font-size: 5vw;
                    }
                    p {
                        font-size: 2.8vw;
                        margin: .5rem 0 1rem;
                    }

                    .service__link {
                        display: flex;
                        align-items: center;
                        gap: 1rem;
                        width: 100%;
                        a {
                            width: auto;
                            font-weight: 500;
                            font-size: 3vw;
                            padding: .5rem 1rem;
                            border: 1px solid #ffffff;
                            transition: .3s ease-in-out;
                            
                            mark {
                                background: none;
                                transition: .3s ease-out;
                            }
                            
                            &:hover{
                                scale: 102%;
                                color: black;
                                background: white;
                            }
                            
                            &:hover mark{
                                color: black;
                                padding-left: .5rem;
                            }
                        }
                    }
                }
            }
        }
    }
    
    @media screen and (min-width: 768px) {
        .service__container {
            height: auto;

            .left__line__blob {
                position: absolute;
                width: 70vw;
                left: 0;
                margin-left: -25vw;
                bottom: -60%;
                z-index: -1;
            }
    
            .bubble1 {
                position: absolute;
                right: 5%;
                bottom: -50%;
                width: 40vw;
                z-index: -1;
            }
            
            .service {
                grid-template-columns: 30% 30% 30%
                width: 85vw;
                gap: 1rem;

                .service__message__container {
                    .service__message {
                        h2 {
                            font-size: 5.5vw;
                        }
                        p {
                            font-size: 2.4vw;
                        }
                        .service__link {
                            a {
                                font-size: 2.5vw;
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1000px) {
        .service__container {
            margin: 0 auto;
            height: 100vh;

            .left__line__blob {
                position: absolute;
                width: 75vw;
                left: 0;
                margin-left: -30vw;
                bottom: -75%;
                z-index: -1;
            }
    
            .bubble1 {
                position: absolute;
                right: 5%;
                bottom: -25%;
                width: 40vw;
                z-index: -1;
            }
            
            .service {
                grid-template-columns: 35% 30% 30%;
                gap: 1.5rem;
                width: 80vw;

                .service__message__container {
                    .service__message {
                        h2 {
                            font-size: 4vw;
                        }
                        p {
                            font-size: 1.7vw;
                        }
                        .service__link {
                            a {
                                font-size: 1.6vw;
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1200px) {
        .service__container {
            height: 100vh;
            margin: 0 auto;

            .left__line__blob {
                position: absolute;
                width: 70vw;
                left: 0;
                margin-left: -25vw;
                bottom: -65%;
                z-index: -1;
            }
    
            .bubble1 {
                position: absolute;
                right: 5%;
                bottom: -20%;
                width: 30vw;
                z-index: -1;
            }
            
            .service {
                grid-template-columns: 35% 30% 30%;
                gap: 1.5rem;
                width: 70vw;

                .service__message__container {
                    .service__message {
                        h2 {
                            font-size: 4vw;
                        }
                        p {
                            font-size: 1.5vw;
                        }
                        .service__link {
                            a {
                                font-size: 1.6vw;
                            }
                        }
                    }
                }
            }
        }
    }
`