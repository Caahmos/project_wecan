import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.header`
    width: 100%;
    padding: 15px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.93rem;

    @media screen and (max-width: 800px) {
        padding: 15px 35px;
    }
`

export const Brand = styled.div`
    display: flex;
    align-items: center;
`

export const Buttons = styled.nav`

`

export const Button = styled(Link)`
    padding: 7px 12px;
    text-decoration: none;
    margin-left: 20px;
    color: #171414;
    border: 1px solid #171414;
    border-radius: 6px;
    background-color: #FFF;
    outline: none;
    transition: all 0.4s ease;

    &:hover{
        border: 1px solid #bd0006;
        color: #bd0006;
    }
`

export const Text = styled.span`
    margin-right: 5px;
`


