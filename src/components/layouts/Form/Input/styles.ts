import styled from "styled-components";

interface IContainer {
    color: string;
}

export const Container = styled.div<IContainer>`
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
    
    > label {
        font-size: 0.8rem;
        font-weight: 500;
    }

    > input {
        width: 100%;
        border: none;
        padding: 8px;
        outline: none;
        border-bottom: 1px solid ${props => props.color};

        &:hover{
            border-bottom: 1px solid #171414;
        }
    }
`