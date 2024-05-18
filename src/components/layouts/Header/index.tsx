import React from "react";

import WecanLogo from '../../../assets/img/WecanLogo.png';
import LinkItem from "../LinkItem";
import { MdLogin } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { useMenu } from "../../../hooks/useMenu";

import {
    Container,
    Brand,
    Menu,
    Buttons,
    Button,
    Text
} from './styles'

const Header: React.FC = () => {
    const { changeMenu } = useMenu();

    return (
        <Container>
            <Brand>
                <img src={WecanLogo} alt="" width="90px" />
            </Brand>
            <Menu onClick={() => { changeMenu() }}>
                <FiMenu />
            </Menu>
            <Buttons>
                <LinkItem to="/" label="Início" />
                <LinkItem to="/blog" label="Blog" />
                <LinkItem to="/workwithus" label="Trabalhe Conosco" />
                <Button to='/login'><Text>Área do aluno</Text><MdLogin /></Button>
            </Buttons>
        </Container>
    )
}

export default Header;