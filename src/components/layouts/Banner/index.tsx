import React from "react";

import {
    Container,
    Photo,
    Advantages,
    Title,
    Form,
    Group,
    Div
} from './styles'

import Input from "../Form/Input";
import Mulher from '../../../assets/img/Mulher.png';
import ListItem from "../ListItem";

import { FaUnlockAlt } from "react-icons/fa";

const Banner: React.FC = () => {
    return (
        <Container>
            <Advantages>
                <Title>Cursos Profissionalizantes</Title>
                <ListItem text="Aulas particulares online"/>
                <ListItem text="Conversação todos os dias"/>
                <ListItem text="Aulas temáticas ao vivo diárias"/>
                <ListItem text="Conteúdo disponível 24 horas"/>
                <ListItem text="Rotina com horários flexíveis"/>
                <ListItem text="Estude de qualquer lugar"/>
            </Advantages>
            <Photo>
                <img src={Mulher} alt="" width="250px" />
            </Photo>
            <Form>
                <p>Desbloquear oferta especial</p>
                <form>
                    <Group>
                        <Div><Input name="name" type="text" placeholder="Seu nome" label="Digite o seu nome:" handleOnChange={() => { }} /></Div>
                        <Div><Input name="age" type="text" placeholder="Sua idade" label="Digite a sua idade:" handleOnChange={() => { }} /></Div>
                    </Group>
                    <Input name="phone" type="text" placeholder="Seu número/whatsapp" label="Digite o seu número:" handleOnChange={() => { }} />
                    <Input name="email" type="text" placeholder="Seu email" label="Digite o seu email:" handleOnChange={() => { }} />
                    <button><FaUnlockAlt /><p>DESBLOQUEAR AGORA</p></button>
                </form>
            </Form>
        </Container>
    )
}

export default Banner;