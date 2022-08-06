import styled from 'styled-components';

export const StyledForm = styled.div`
    .form__section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        
        .form__content {
            background: #141313;
            width: 90vw;
            margin: .5rem auto;
            padding: 2.5rem;
            backdrop-filter: blur(5px);

                .form__message {
                    h2 {
                        font-size: 6vw;
                    }

                    p {
                        font-size: 3.3vw;
                    }
                }

                form {
                    margin: 1.5rem auto;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-end;

                    input{
                        width: 100%;
                        background: none;
                        border: none;
                        border: 2px solid #ffffff00;
                        border-bottom: 2px solid #878686;
                        padding: 1rem .5rem;
                        margin: .5rem auto;
                        transition: .3s ease-in-out;
                        
                        :focus {
                            outline: none;
                            border: 2px solid #FFFEFE;
                        }
                    }
                    
                    textarea{
                        background: none;
                        border: none;
                        border: 2px solid #878686;
                        padding:.5rem;
                        height: 160px;
                        margin: .5rem 0;
                        width: 100%;
                        transition: .3s ease-in-out;
                        
                        :focus {
                            outline: none;
                            border: 2px solid #FFFEFE;
                        }
                    }
                    
                    button {
                        width: auto;
                        background: none;
                        border: 2px solid #FFFEFE;
                        padding: .5rem 1.5rem;
                        margin: .5rem 0;
                        transition: .3s ease-in-out;
                        font-weight: 700;

                        &:hover {
                            cursor: pointer;
                            background: #FFFEFE;
                            color: black;
                            transform: scale(1.1);
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 768px) {
        .form__section {
            .form__content {
                width: 85vw;
                padding: 2rem 4rem;

                .form__message {
                    h2 {
                        font-size: 4vw;
                    }

                    p {
                        font-size: 1.8vw;
                    }
                }

                form {
                    justify-content: space-between;
                    align-items: end;

                    input {
                        width: 45%;
                        margin: .5rem 0;
                        padding: .6rem .5rem;

                    }

                    textarea {
                        width: 45%;
                        height: 8rem;
                        margin: .5rem 0;
                    }

                    button {
                        height: auto;
                    }
                }
            }
        }
    }

    @media (min-width: 1000px) {
        .form__section {
            height: 100vh;
            .form__content {
                padding: 3rem 4rem;

                .form__message {
                    h2 {
                        font-size: 4vw;
                    }

                    p {
                        font-size: 1.8vw;
                    }
                }

                form {
                    input {
                        width: 45%;
                        margin: .5rem 0;
                        padding: .6rem .5rem;

                    }

                    textarea {
                        width: 45%;
                        height: 8rem;
                        margin: .5rem 0;
                    }

                    button {
                        font-size: 2vw;
                        padding: .5rem 2rem;  
                        height: auto;
                    }
                }
            }
        }
    }

    @media (min-width: 1200px) {
        .form__section {
            height: 100vh;
            .form__content {
                width: 70vw;
                padding: 3rem 4rem;

                .form__message {
                    h2 {
                        font-size: 3vw;
                    }

                    p {
                        font-size: 1.2vw;
                    }
                }

                form {
                    height: auto;
                    input {
                        width: 45%;
                        padding: .6rem .5rem;

                    }

                    button {
                        font-size: 1.5vw;
                        padding: .7rem 2rem;  
                        height: auto;
                    }
                }
            }
        }
    }

`