import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }

    body{
        background-color: #cad3de;
    }
    #root{
        margin:0 auto;
    }`;

export default GlobalStyle;
