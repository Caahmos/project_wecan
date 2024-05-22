import React from "react";
import Banner from "../../layouts/Banner";
import mulher from '../../../assets/img/Mulher.png';

import Unilever from '../../../assets/img/UnileverLogo.png';
import GoodBom from '../../../assets/img/GoodBom.png';
import Arcor from '../../../assets/img/Arcor_logo.png';

import {
    Container,
    Empresas,
    Logos,
    About,
    Content
} from './styles';

import BannerItem from "../../layouts/BannerItem";
import ListItem from "../../layouts/ListItem";
import FormContainer from "../../layouts/Form/FormContainer";
import ImgItem from "../../layouts/ImgItem";

const Home: React.FC = () => (
    <Container>
        <Banner>
            <BannerItem title="Cursos Profissionalizantes">
                <ListItem text="Aulas particulares online" />
                <ListItem text="Conversação todos os dias" />
                <ListItem text="Aulas temáticas ao vivo diárias" />
                <ListItem text="Conteúdo disponível 24 horas" />
                <ListItem text="Rotina com horários flexíveis" />
                <ListItem text="Estude de qualquer lugar" />
            </BannerItem>
            <ImgItem img={mulher} />
            <FormContainer />
        </Banner>
        <Empresas>
            <p>Empresas que já capacitaram seus profissionais com nossos treinamentos e cursos!</p>
            <Logos>
                <div>
                    <img src={Unilever} alt="Unilever Logo" />
                </div>
                <div>
                    <img src={Arcor} alt="Arcor Logo" />
                </div>
                <div>
                    <img src={GoodBom} alt="Goodbom Logo" />
                </div>
            </Logos>
        </Empresas>
        <About>
            <Content>
a
            </Content>
            <Content>
a
            </Content>
        </About>
    </Container>
)

export default Home;
