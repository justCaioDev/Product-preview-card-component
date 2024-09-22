import { createGlobalStyle } from "styled-components";

const MyGlobalStyles = createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        height: 100vh;
        background-color: hsl(30, 38%, 92%);
    }

    p {
        font-size: 0.875rem;
        color: hsl(228, 12%, 48%);
    }

`

export default MyGlobalStyles