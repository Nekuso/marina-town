import styled from 'styled-components';

export const StyledTour = styled.div `
    .tour__section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;

        .tour__content {
            margin: 1rem auto;
            width: 90vw;

            h2 {
                text-align: center;
                font-size: 6vw;
                margin: 1rem 0;
            }

            .tour__container {
                .vr__tour {
                    border-radius: 1rem;
                    width: 100%;
                    height: 40vh;
                }
            }
        }
    }

    @media screen and (min-width: 768px) {
        .tour__section {
            .tour__content {
                width: 85vw;
                
                h2 {
                    font-size: 5vw;
                    line-height: 4.5rem;
                }

                .tour__container {
                    .vr__tour {
                        height: 70vh
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1000px) {
        .tour__section {
            height: 100vh;
            .tour__content {
                width: 85vw;
                
                h2 {
                    font-size: 5vw;
                }

                .tour__container {
                    .vr__tour {
                        height: 70vh
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1200px) {
        .tour__section {
            .tour__content {
                width: 80vw;
                
                h2 {
                    font-size: 4vw;
                }

                .tour__container {
                    .vr__tour {
                        height: 80vh
                    }
                }
            }
        }
    }
`