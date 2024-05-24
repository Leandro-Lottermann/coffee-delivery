import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    
    body {
        background: ${(props) => props.theme['background-primary']};
        -webkit-font-smoothing: antialised;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        outline: 0;
    }

    input {
        border: none;
        background: none;
    }

    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    
    }
    input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;

    }

    button {
        border: 0;
        background: none;
        outline: none;
        cursor: pointer;
    }
`
