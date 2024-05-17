import styled from "styled-components";

export const Container = styled.div`
    max-width: 330px;
    min-height: 300px;
    padding: 13px;
    background-color: #FFF;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;

    > p {
        margin-bottom: 10px;
    }

    > form > button {
        width: 100%;
        padding: 15px;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: #5CC257;
        color: #FFF;
        cursor: pointer;
        border-radius: 5px;
        transition: all 0.3s ease;

        > p {
            margin-left: 10px;
        }

        &:hover{
            transform: scale(1.03);
        }
    }
`

export const Div = styled.div`
    width: 47%;
`

export const Group = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`



