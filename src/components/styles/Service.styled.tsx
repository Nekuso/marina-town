import styled from 'styled-components';

export const StyledService = styled.div`

    .service__container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: auto;
        margin: 1rem auto;
        
        .service {
            display: grid;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            grid-template-columns: 40% 27% 27%;
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
                            
                            mark {
                                background: none;
                                transition: .3s ease-out;
                            }

                            &:hover mark{
                                padding-left: .5rem;
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 768px) {
        
    }
`