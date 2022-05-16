import styled from "styled-components";

export const Container = styled.div`

    .album{
        margin: 0;
        padding: 0.5rem;
        background-color: rgba(255, 255, 255, 0);
        margin-bottom: 1rem;
        width: 88vw;

        span {
            font-weight: bold;
            font-family: 'Lato', sans-serif;
        }

        .track{
            margin: 0;
            padding: 0.5rem;
            background-color: rgba(255, 255, 255, 0);
            display: flex;
            justify-content: space-between;

            p {
                font-size: 0.65rem;
                font-family: 'Roboto', sans-serif;
                width: 170px;
                }

            button {
                background-color:  #1686f6;
                border: 0;
                border-radius: 5px;
                padding: 10px;
                cursor: pointer;
                color: white;
                font-weight: bold;
                font-size: 0.5rem;
                height: 20px;
                display: flex;
                align-items: center;
            }

            button:hover {
                border: 1px solid black;
            }
        }

        .box-btn {
            display: flex;
        }
    }
`;