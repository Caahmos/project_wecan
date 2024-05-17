import styled from "styled-components";

export const Container = styled.div`
    width: 350px;
    min-height: 350px;
    border-radius: 10px;

    @media screen and (max-width: 1200px){
        padding: 20px 0;
    }
`

export const Title = styled.div`
    font-size: 2.5rem;
    color: #fff;
    font-weight: 500;
    line-height: 35px;
    margin-bottom: 20px;
    
    @media screen and (max-width: 1200px){
        font-size: 2rem;
    }
`



