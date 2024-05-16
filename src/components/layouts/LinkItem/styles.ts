import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    text-decoration: none;
    color: #171414;
    margin-left: 20px;

    &:hover{
        color: #bd0006;
        transition: all 0.4s ease;
    }
`