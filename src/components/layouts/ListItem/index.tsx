import React from "react";

import {
    Container,
    Text
} from './styles'

import { FaCheck } from "react-icons/fa";

interface IListItem {
    text: string;
}

const ListItem: React.FC<IListItem> = ({text}) => (
    <Container>
        <Text>{text}</Text><FaCheck/>
    </Container>
)

export default ListItem;