import { createGlobalStyle } from "styled-components";
import bodyImg from "../assets/background.png"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box
    }
    body {
        background: url(${bodyImg}) center;
        background-repeat: no-repeat;
        background-size: cover;
        max-height: 100vh;
    }
`;