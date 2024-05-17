import React from "react";
import Banner from "../../layouts/Banner";
import mulher from '../../../assets/img/Mulher.png';

import {
    Container
} from './styles'
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
    </Container>
)

export default Home;