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
            margin: 2rem auto;

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
                    gap: 2%;
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

    @media screen and (min-width: 780px) {
        .location__section {
            .location__content {
                h2 {
                    font-size: 2vw;
                }
            }
        }
    }
`