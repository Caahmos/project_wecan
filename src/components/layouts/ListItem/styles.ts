import styled from "styled-components";

export const Container = styled.li`
    display: inline-block;
    padding: 5px 10px;
    margin-bottom: 5px;
    list-style: none;
    font-size: 1.2rem;
    border-radius: 15px;
    color: #fff;
    background-color: #bd0006aa;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover{
        transform: translateX(50px);
    }
    
    @media screen and (max-width: 800px) {
        &:hover{
            transform: translateX(0);
        }
    }
`

export const Text = styled.span`
    margin-right: 5px;
`