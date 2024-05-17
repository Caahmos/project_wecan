import React from "react";
import Content from "../Content";
import Aside from "../Aside/Index";
import Header from "../Header";
import Footer from "../Footer";

import {
    Container
} from './styles'

interface ILayoutProps{
    children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({children}) => {

    return (
        <Container>
            <Header/>
            <Content>
                {children}
            </Content>
            <Aside/>
            <Footer/>
        </Container>
    )
}

export default Layout;