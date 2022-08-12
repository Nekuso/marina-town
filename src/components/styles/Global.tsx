import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        font-family: 'Poppins';
        color: #FFFFFFFF;
    }
    
    html {
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
        overflow: overlay;
        overflow-x: hidden;
        
    }
    
    body {
        background: #000000;
        width: 100vw;
        max-width: 100vw;
        overflow-x: hidden;
    }
    
    ::-webkit-scrollbar {
        width: 15px;
        background: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
        background: #ffffff62;
        border-radius: 6px;
    }
    
    ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0);
    }
    

`
export default GlobalStyles;