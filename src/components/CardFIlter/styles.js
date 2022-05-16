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
                font-size: 1.1rem;
                font-family: 'Roboto', sans-serif;
                width: 170px;
                }
        }
    }
`;