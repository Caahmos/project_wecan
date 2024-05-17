import React, { useState, useMemo } from "react";
import { Container, Div, Group } from './styles';
import './errorStyle.css';
import { FaUnlockAlt } from "react-icons/fa";
import Input from "../Input";

const FormContainer: React.FC = () => {
    const [errorFields, setErrorFields] = useState<{ [key: string]: boolean }>({});

    function validarForm() {
        const inputs = document.querySelectorAll<HTMLInputElement>('.valida');
        const paragraphs = document.querySelectorAll<HTMLParagraphElement>('.error_message');
        let isValid = true;
        
        paragraphs.forEach((paragraph) => {
            paragraph.innerHTML = '';
        });

        const newErrorFields: { [key: string]: boolean } = {};

        inputs.forEach((input) => {
            const name = input.name;
            const labelElement = input.previousElementSibling as HTMLLabelElement | null;
            const labelText = labelElement ? labelElement.textContent : '';

            if (!input.value) {
                newErrorFields[name] = true;
                isValid = false;
                input.insertAdjacentHTML('afterend', `<p class="error_message">Campo ${labelText?.toLocaleLowerCase()} inválido!</p>`);
            } else {
                newErrorFields[name] = false;
            }
        });

        setErrorFields(newErrorFields);
        return isValid;
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();

        if (validarForm()) {
            alert('Oferta desbloqueada!');
        }
    }

    return (
        <Container>
            <p>Desbloquear oferta especial!</p>
            <form id="trello_form" onSubmit={handleSubmit}>
                <Group>
                    <Div>
                        <Input
                            color={errorFields.name ? '#db1919' : '#c4c4c4'}
                            name="name"
                            type="text"
                            placeholder="Seu nome"
                            label="Nome"
                            handleOnChange={() => { }}
                        />
                    </Div>
                    <Div>
                        <Input
                            color={errorFields.age ? '#db1919' : '#c4c4c4'}
                            name="age"
                            type="text"
                            placeholder="Sua idade"
                            label="Idade"
                            handleOnChange={() => { }}
                        />
                    </Div>
                </Group>
                <Input
                    color={errorFields.phone ? '#db1919' : '#c4c4c4'}
                    name="phone"
                    type="text"
                    placeholder="Seu número/whatsapp"
                    label="Número"
                    handleOnChange={() => { }}
                />
                <Input
                    color={errorFields.email ? '#db1919' : '#c4c4c4'}
                    name="email"
                    type="email"
                    placeholder="Seu email"
                    label="Email"
                    handleOnChange={() => { }}
                />
                <button type="submit"><FaUnlockAlt /><p>DESBLOQUEAR AGORA</p></button>
            </form>
        </Container>
    );
}

export default FormContainer;
