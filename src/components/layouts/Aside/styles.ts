import styled, { keyframes, css } from "styled-components";
import { Link } from 'react-router-dom';

const introAnimation = keyframes`
    0% {
        transform: translateX(50px);
    }
    100% {
        transform: translateX(0px);
    }
`;

const endAnimation = keyframes`
    0% {
        transform: translateX(0px);
    }
    100% {
        opacity: 0;
        transform: translateX(50px);
    }
`;

interface IContainer {
    display: boolean;
    isAnimatingOut: boolean;
}

export const Container = styled.aside<IContainer>`
    width: 250px;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    position: fixed;
    right: 0;
    z-index: 9999;
    background-color: white;
    box-shadow: -20px 0px 39px 0px rgba(0,0,0,0.29);
    display: none;
    animation: ${(props) =>
        props.display ?
            css`${introAnimation} 0.3s forwards` :
            props.isAnimatingOut ?
                css`${endAnimation} 0.3s forwards` :
                'none'
    };

    > * {
        margin-left: 0;
        text-align: center;
        padding: 15px;
    }

    @media screen and (max-width: 800px) {
        display: flex;
        width: 250px;
        gap: 20px;
    }
`;

export const Button = styled(Link)`
    padding: 7px 12px;
    text-decoration: none;
    color: #171414;
    border: 1px solid #171414;
    border-radius: 6px;
    background-color: #FFF;
    outline: none;
    transition: all 0.4s ease;
    display: flex;
    align-items: center;
    justify-self: self-end;

    &:hover {
        border: 1px solid #bd0006;
        color: #bd0006;
    }
`;

export const Text = styled.span`
    margin-right: 5px;
`;
