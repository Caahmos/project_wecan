import React from "react";

import {
    Container
} from './styles';

interface ILinkItem {
    to: string;
    label: string;
}

const LinkItem: React.FC<ILinkItem> = ({to, label}) => {

    return (
        <Container to={to}>
            {label}
        </Container>
    )
}

export default LinkItem;