import styled from 'styled-components';

export const StyledTour = styled.div `
    .tour__section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        position: relative;
        height: 65vh;

        .right__line__blob_2 {
            position: absolute;
            width: 90vw;
            right: 0;
            bottom: -10%;
            margin-right: -55vw;
            z-index: -1;
        }
        
        .bubble1 {
            position: absolute;
            width: 50vw;
            left: 0;
            bottom: 20%;
            z-index: -1;
        }

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
            height: 90vh;

            .right__line__blob_2 {
                position: absolute;
                width: 130vw;
                right: 0;
                bottom: -10%;
                margin-right: -75vw;
                z-index: -1;
            }
            
            .bubble1 {
                position: absolute;
                width: 50vw;
                left: 0;
                bottom: 10%;
                z-index: -1;
            }
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

            .right__line__blob_2 {
                position: absolute;
                width: 90vw;
                right: 0;
                bottom: -15%;
                margin-right: -45vw;
                z-index: -1;
            }
            
            .bubble1 {
                position: absolute;
                width: 30vw;
                left: 0;
                bottom: -15%;
                margin-left: 5vw;
                z-index: -1;
            }

            .tour__content {
                width: 85vw;
                
                h2 {
                    font-size: 5vw;
                }

                .tour__container {
                    .vr__tour {
                        height: 80vh
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1200px) {
        .tour__section {

            .right__line__blob_2 {
                position: absolute;
                width: 100vw;
                right: 0;
                bottom: -15%;
                margin-right: -65vw;
                z-index: -1;
            }
            
            .bubble1 {
                position: absolute;
                width: 30vw;
                left: 0;
                bottom: -20%;
                margin-left: 5vw;
                z-index: -1;
            }

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