import styled, { keyframes } from "styled-components";
import { Link } from 'react-router-dom';

const introAnimation = keyframes`
    0% {
        transform: translateX(50px);
    }
    100%{
        transform: translateX(0px);
    }
`

const endAnimation = keyframes`
    0% {
        transform: translateX(0px);
    }
    100%{
        opacity: 0;
        transform: translateX(50px);
        display: none;
    }
`

interface IContainer {
    display: boolean;
}

export const Container = styled.aside<IContainer>`
    grid-area: AS;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 20px;
    z-index: 2;
    position: relative;
    background-color: white;
    -webkit-box-shadow: -20px 0px 39px 0px rgba(0,0,0,0.29);
    -moz-box-shadow: -20px 0px 39px 0px rgba(0,0,0,0.29);
    box-shadow: -20px 0px 39px 0px rgba(0,0,0,0.29);

    @media screen and (max-width: 800px){
        display: ${props => props.display ? 'flex' : 'none'};
        position: fixed;
        animation: ${(props) => props.display ? introAnimation : endAnimation} 0.9s;
        right: 0;
        z-index: 2;
        height: 100vh;
        width: 250px;
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
