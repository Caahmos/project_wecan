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