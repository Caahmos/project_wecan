import React from "react";

import WecanLogo from '../../../assets/img/WecanLogo.png';
import LinkItem from "../LinkItem";
import { MdLogin } from "react-icons/md";

import {
    Container,
    Brand,
    Buttons,
    Button,
    Text
} from './styles'

const Header: React.FC = () => (
    <Container>
        <Brand>
            <img src={WecanLogo} alt="" width="90px" />
        </Brand>
        <Buttons>
            <LinkItem to="/" label="Início" />
            <LinkItem to="/blog" label="Blog" />
            <LinkItem to="/workwithus" label="Trabalhe Conosco" />
            <Button to='/login'><Text>Área do aluno</Text><MdLogin /></Button>
        </Buttons>
    </Container>
)

export default Header;