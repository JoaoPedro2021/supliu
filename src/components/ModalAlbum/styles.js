import styled from "styled-components"


export const Box = styled.div`
    display: flex;
    justify-content: center;
    width: 130px;
    height: 25px;

    .btn-open {
        border-radius:2rem; 
        border: 0;
        width: 125px; 
        color: white; 
        background-color: #1686f6;
        font-family:"sans-serif";
        font-weight: bold;
        font-size: 0.7rem;
    }

    .btn-open:hover {
        border: 2px solid black;
    }
`;


export const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 2rem;

    p {
        display: flex;
        align-items: center;
        font-weight: bold;
        padding-left: 1rem;
        font-family: 'Open Sans', sans-serif;
    }
    .btn-close {
        height: 18px;
        width: 20px;
        margin: 10px;
        border-radius: 0.4rem;
        background-color: white;
        border: 0;

    }

    .btn-close:hover{
        background-color: #FBF7F4;
    }
`;


export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    margin-bottom: 1rem;

    .label {
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 0.6rem;
    }

    .input {
        border-radius: 3px;
        padding: 0.2rem;
        border: 0;
    }
    
    .input:focus {
        border: 1px solid #1686f6; 
    }

    .span {
        color: red;
    }
`;