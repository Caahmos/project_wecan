import React from "react";

import WecanLogo from '../../../assets/img/WecanLogo.png';
import LinkItem from "../LinkItem";

import {
    Container,
    Brand,
    Buttons
} from './styles'

const Header: React.FC = () => (
    <Container>
        <Brand>
            <img src={WecanLogo} alt="" width="90px" />
        </Brand>
        <Buttons>
            <LinkItem to="/" label="Início"/>
            <LinkItem to="/blog" label="Blog"/>
            <LinkItem to="/workwithus" label="Trabalhe Conosco"/>
        </Buttons>
    </Container>
)

export default Header;