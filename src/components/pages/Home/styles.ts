import styled from "styled-components";

export const Container = styled.main``;

export const Empresas = styled.section`
    width: 100%;
    padding: 20px 30px;
    background-color: #fff;
    text-align: center;
    color: #0f0100;
`;

export const Logos = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;

    > div {
        max-width: 100px;
        max-height: 100px; 
        display: flex;
        align-items: center;
        justify-content: center;

        > img {
            max-width: 100%;
            max-height: 100%;
            height: auto;
            width: auto;
        }
    }
`;

export const About = styled.section`
    width: 100%;
    padding: 40px;
    background: #F0F0F0;
    gap: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 800px){
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const Content = styled.div`
    width: 600px;
    padding: 15px;
    background-color: #fff;
`;