import styled from "styled-components";

import Banner from '../../../assets/img/Banner.png';

export const Container = styled.div`
    min-height: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background-image: url(${Banner});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0 30px;
    
    @media screen and (max-width: 1200px){
        padding: 20px 30px;
        text-align: center;
    }
`

export const Photo = styled.div`
    align-self: self-end;
    
    @media screen and (max-width: 1200px){
        display: none;
    }
`

export const Title = styled.div`
    font-size: 2.5rem;
    color: #fff;
    font-weight: 500;
    line-height: 35px;
    margin-bottom: 20px;
`

export const Advantages = styled.div`
    width: 350px;
    min-height: 350px;
    border-radius: 10px;

    @media screen and (max-width: 1200px){
        padding: 20px 0;
    }
`

export const Div = styled.div`
    width: 150px;
`

export const Group = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const Form = styled.div`
    min-width: 350px;
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

