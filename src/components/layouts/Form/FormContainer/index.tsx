import React from "react";

import {
    Container,
    Div,
    Group
} from './styles'

import { FaUnlockAlt } from "react-icons/fa";
import Input from "../Input";

const FormContainer: React.FC = () => (
    <Container>
        <form>
            <Group>
                <Div><Input name="name" type="text" placeholder="Seu nome" label="Digite o seu nome:" handleOnChange={() => { }} /></Div>
                <Div><Input name="age" type="text" placeholder="Sua idade" label="Digite a sua idade:" handleOnChange={() => { }} /></Div>
            </Group>
            <Input name="phone" type="text" placeholder="Seu número/whatsapp" label="Digite o seu número:" handleOnChange={() => { }} />
            <Input name="email" type="text" placeholder="Seu email" label="Digite o seu email:" handleOnChange={() => { }} />
            <button><FaUnlockAlt /><p>DESBLOQUEAR AGORA</p></button>
        </form>
    </Container>
)

export default FormContainer;