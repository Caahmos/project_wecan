import React, { useEffect, useState, useRef } from "react";
import LinkItem from "../LinkItem";
import { MdLogin } from "react-icons/md";
import { useMenu } from "../../../hooks/useMenu";

import {
    Container,
    Button,
    Text
} from './styles'

const Aside: React.FC = () => {
    const { menuIsOpen, changeMenu } = useMenu();
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

    const asideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (e: MouseEvent) => {
        if (asideRef.current && !asideRef.current.contains(e.target as Node)) {
            console.log("Clique fora do componente Aside");
            changeMenu();
        }
    };

    return (
        shouldRender ? (
            <Container ref={asideRef} display={menuIsOpen} isAnimatingOut={isAnimatingOut} onAnimationEnd={handleAnimationEnd}>
                <LinkItem to="/" label="Início" />
                <LinkItem to="/blog" label="Blog" />
                <LinkItem to="/workwithus" label="Trabalhe Conosco" />
                <Button to='/login'><Text>Área do aluno</Text><MdLogin /></Button>
            </Container>
        ) : null
    );
}

export default Aside;
