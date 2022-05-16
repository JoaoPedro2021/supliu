import styled from "styled-components";


export const Container = styled.div`
    width: 90vw;
    margin: 0 auto;
    
`;

export const Box = styled.div`
    margin-top: 0.5rem;
    height: 80vh;

    .header {
        width: 90vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        padding: 1.4rem;
        height: 75px;

        img {
            width: 100px;
        }

        p {
            font-size: 1.5rem;
            margin-right: 1rem;
            font-family: 'Manrope', sans-serif;
        }
    }

    .boxContainer {
        background-color: rgba(255, 255, 255, 0.5);
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;

        span {
            font-family: 'Manrope', sans-serif;
        }

        .pesquisa {
            padding: 0;
            height: 30px;
            background-color: rgba(255, 255, 255, 0);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;

            input {
                width: 60vw;
                height: 30px;
                border-radius: 2rem;
                border: 0;
                background-color:  white;
                padding: 1rem;
            }

            .btn-procurar {
                background-color: #1686f6;
                border: 0;
                width: 130px;
                height: 30px;
                border-radius: 2rem;
                color: white;
                cursor: pointer;
            }

            .list-album {
                background-color: antiquewhite;
                display: flex;
                width: 100vw;
            }
        }
    }
    
`;

export const BoxBtn = styled.div`
    width: 200px;
    padding: 5px;

    .btnPage {
        margin: 2px;
        width: 15px;
        height: 19px;
        border: 1px solid black;
        border-radius: 3px;
    }
    .btnPage:hover {
        background-color: gray;
        transition: 0.5s;
    }
`;