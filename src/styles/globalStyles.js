import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,700');
    
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    *,
    *:after,
    *:before {
        box-sizing: inherit;
    }
    body {
        margin: 0;
        padding: 0;
        font-size: 10px;
        font-family: 'Roboto', sans-serif;
        color: gray;
    }
    a {
        text-decoration: none;
    }
`