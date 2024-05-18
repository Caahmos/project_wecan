import React from "react";
import LinkItem from "../LinkItem";
import { MdLogin } from "react-icons/md";
import { useMenu } from "../../../hooks/useMenu";

import {
    Container,
    Button,
    Text
} from './styles'

const Aside: React.FC = () => {
    const { menuIsOpen } = useMenu();

    return (
        <Container display={menuIsOpen}>
            <LinkItem to="/" label="Início" />
            <LinkItem to="/blog" label="Blog" />
            <LinkItem to="/workwithus" label="Trabalhe Conosco" />
            <Button to='/login'><Text>Área do aluno</Text><MdLogin /></Button>
        </Container>
    )
}

export default Aside;