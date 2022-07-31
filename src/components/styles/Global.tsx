import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        font-family: 'Montserrat';
        color: #000000;
    }

    html {
        scroll-behavior: smooth;
        overflow-x: hidden;
    }
    
    body {
        overflow-x: hidden;
    
    }
`
export default GlobalStyles;