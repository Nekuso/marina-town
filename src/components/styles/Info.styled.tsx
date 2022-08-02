import styled from 'styled-components'

export const StyledInfo = styled.div`
    .info__section {
        width: 100vw;
        height: auto;

        .info {
            width: 90vw;
            margin: 1rem auto 0;
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
                            flex: 1 1 50%;
                            h3 {
                                font-size: 5vw;
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
                    font-size: 8vw;
                }
                p {
                    font-size: 3vw;
                }
            }
        }
    }

    @media screen and (min-width: 768px) {
        .info__section {
            .info {
                justify-content: center;
                
                .info__destination {
                    display: grid;
                    grid-template-columns: 50% 50%;
                    .info__destination__container {
                        h2 {    
                            font-size: 3vw;
                        }
                    }
                }

            }
        }
    }
`