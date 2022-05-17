import { createGlobalStyle } from "styled-components";
import bodyImg from "../assets/background.png"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        background: url(${bodyImg}) center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
    }
    body::-webkit-scrollbar {
        width: 5px;               /* width of the entire scrollbar */
    }

    body::-webkit-scrollbar-track {
        background: gray;        /* color of the tracking area */
    }

    body::-webkit-scrollbar-thumb {
        background-color: #d3d3d3;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */  /* creates padding around scroll thumb */
    }
`;