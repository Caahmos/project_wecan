import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.header`
    padding: 12px 70px;
    display: flex;
    z-index: 1;
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

export const Menu = styled.nav`
    font-size: 2.3rem;
    display: none;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        display: flex;
        align-items: center;
    }
`

export const Buttons = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 800px) {
        display: none;
    }
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
    display: flex;
    align-items: center;

    &:hover{
        border: 1px solid #bd0006;
        color: #bd0006;
    }
`

export const Text = styled.span`
    margin-right: 5px;
`


