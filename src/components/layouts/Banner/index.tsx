import React from "react";

import {
    Container,
} from './styles'

import Input from "../Form/Input";
import ListItem from "../ListItem";

interface IBannerProps {
    children: React.ReactNode;
}

const Banner: React.FC<IBannerProps> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Banner;