import React, { useEffect, useState } from "react";
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
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);
    const [shouldRender, setShouldRender] = useState(menuIsOpen);

    useEffect(() => {
        if (menuIsOpen) {
            setShouldRender(true);
            setIsAnimatingOut(false);
        } else {
            setIsAnimatingOut(true);
        }
    }, [menuIsOpen]);

    const handleAnimationEnd = () => {
        if (isAnimatingOut) {
            setShouldRender(false);
        }
    };

    return (
        shouldRender ? (
            <Container display={menuIsOpen} isAnimatingOut={isAnimatingOut} onAnimationEnd={handleAnimationEnd}>
                <LinkItem to="/" label="Início" />
                <LinkItem to="/blog" label="Blog" />
                <LinkItem to="/workwithus" label="Trabalhe Conosco" />
                <Button to='/login'><Text>Área do aluno</Text><MdLogin /></Button>
            </Container>
        ) : null
    );
}

export default Aside;
