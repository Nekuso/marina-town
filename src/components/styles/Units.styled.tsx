import styled from 'styled-components';

export const StyledUnits = styled.div`
    .units__section {
        display: flex;
        justify-items: center;
        align-items: center;
        width: 100vw;
        padding: 2rem 0;
        position: relative;

        .right__line__blob {
            width: 100vw;
            position: absolute;
            bottom: 10%;
            right: 0;
            margin-right: -40vw;
            z-index: -1;
        }
        
        .bubble3 {
            width: 70vw;
            position: absolute;
            bottom: 40%;
            right: 0;
            margin-right: 50vw;
            z-index: -1;
        }
        
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
                    font-size: 2.8vw;
                }

                p:nth-child(3) {
                    margin: 1rem 0 1.5rem;
                    font-size: 2.9vw;
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
                .unit__item {

                }
                
                .unit__item {
                    flex: 1 1 35%;
                }
                .unit {
                    flex: 1 1 35%;
                    cursor: pointer;
                    display: grid;
                    justify-items: center;
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
                            font-size: 2.6vw;
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

            .right__line__blob {
                width: 60vw;
                position: absolute;
                bottom: -25%;
                right: 0;
                margin-right: -20vw;
                z-index: -1;
            }
            
            .bubble3 {
                width: 30vw;
                position: absolute;
                bottom: -10%;
                left: 0;
                margin-left: 5vw;
                z-index: -1;
            }

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
                    .unit__item {
                        flex: 0 0 30%;
                    }
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
                                font-size: 1.5vw;
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

            .right__line__blob {
                width: 60vw;
                position: absolute;
                bottom: -45%;
                right: 0;
                margin-right: -30vw;
                z-index: -1;
            }
            
            .bubble3 {
                width: 30vw;
                position: absolute;
                bottom: -35%;
                left: 0;
                margin-left: 10vw;
                z-index: -1;
            }

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

                    .unit__item {
                        flex: 0 0 30%;
                    }

                    .unit {
                        flex: 0 0 30%;

                        h2 {
                            font-size: 1.5vw;
                        }

                        img {
                            width: 100%;
                        }

                        .unit__info {
                            p {
                                font-size: 1vw;
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

                    .unit__item {
                        flex: 0 0 30%;
                    }
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