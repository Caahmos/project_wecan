import React from "react";

import {
    Container,
    Title
} from './styles';

interface IBannerItem {
    title: string;
    children: React.ReactNode;
}

const BannerItem: React.FC<IBannerItem> = ({ title, children }) => {

    return (
        <Container>
            <Title>
                {title}
            </Title>
            {children}
        </Container>
    )
}

export default BannerItem;