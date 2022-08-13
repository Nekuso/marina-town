import styled from 'styled-components'

export const StyledFooter = styled.div`
    .footer__section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: auto;
        background: #141313;
        padding: 2rem;
        backdrop-filter: blur(5px);

        .footer__content {
            display: grid;
            align-items: start;
            justfy-content: center;
            width: 90vw;
            grid-template-columns: 100%;

            .footer__logo {
                display: grid;
                align-items: center;
                justify-content: center;
                img {
                    width: 70%;
                }
                
                .footer__socials {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 2rem 0;
                    gap: 1rem;
                    a {
                        transition: .2s ease-in-out;
                        i {
                            font-size: 10vw;
                        }

                        &:hover {
                            transform: translateY(-10px);
                        }
                    }
                }
            }

            .footer__links{
                display: flex;
                justify-content: space-between;

                .footer__navigation {
                    h2 {
                        font-size: 5vw;
                    }

                    li{
                        margin: .5rem 0;
                        a {
                            font-size: 3.5vw;
                        }
                    }
                }
            }

            .footer__company {
                h2 {
                    font-size: 5vw;
                }
                li {
                    margin: .5rem 0;
                    a {
                        font-size: 3.5vw;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 768px) {
        .footer__section {
            .footer__content {
                width: 95vw;
                justify-content: space-between;
                align-items: center;
                grid-template-columns: 30% 70%;

                .footer__logo {
                    .footer__socials {
                        justify-content: flex-start;
                        a {
                            i {
                                font-size: 4vw;
                            }
                        }
                    }
                }

                .footer__links {
                    justify-content: space-around;
                    .footer__navigation {
                        h2 {
                            font-size: 2vw;
                        }
                        li{
                            margin: .5rem 0;
                            a {
                                font-size: 1.5vw;
                            }
                        }
                    }

                    .footer__company {
                        h2 {
                            font-size: 2vw;
                        }
                        li{
                            margin: .2rem 0;
                            a {
                                font-size: 1.5vw;
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1000px) {
        .footer__section {
            .footer__content {
                grid-template-columns: 20% 80%;

                .footer__logo {
                    .footer__socials {
                        justify-content: flex-start;
                        a {
                            i {
                                font-size: 3vw;
                            }
                        }
                    }
                }

                .footer__links {
                    justify-content: space-around;
                    .footer__navigation {
                        h2 {
                            font-size: 2vw;
                        }
                        li{
                            margin: .5rem 0;
                            a {
                                font-size: 1.1vw;
                            }
                        }
                    }

                    .footer__company {
                        h2 {
                            font-size: 2vw;
                        }
                        li{
                            margin: .2rem 0;
                            a {
                                font-size: 1.1vw;
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1200px) {
        .footer__section {
            .footer__content {
                .footer__logo {
                    .footer__socials {
                        a {
                            i {
                                font-size: 2.5vw;
                            }
                        }
                    }
                }

                .footer__links {
                    justify-content: space-around;
                    .footer__navigation {
                        h2 {
                            font-size: 1.2vw;
                        }
                        li{
                            margin: .8rem 0;
                            a {
                                font-size: 1vw;
                            }
                        }
                    }

                    .footer__company {
                        h2 {
                            font-size: 1.2vw;
                        }
                        li{
                            margin: .8rem 0;
                            a {
                                font-size: 1.1vw;
                            }
                        }
                    }
                }
            }
        }
    }

`