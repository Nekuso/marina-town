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
            margin: 0 auto;
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
                    justify-content: space-between;

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
                        width: 100%;
                        height: 160px;
                        margin: .5rem auto;
                        
                        :focus {
                            outline: none;
                        }
                    }
                    
                    button {
                        background: none;
                        border: 2px solid #FFFEFE;
                        padding: .5rem 1.5rem;
                    }
                }
            }
        }
    }

`