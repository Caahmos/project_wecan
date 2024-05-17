import React from "react";

import {
    Container
} from './styles'

interface IInputProps {
    label: string;
    color: string;
    type: string;
    name: string;
    placeholder: string;
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInputProps> = ({ label, color, name, type, placeholder, handleOnChange }) => (
    <Container color={color}>
        <label htmlFor={name}>{label}</label>
        <input className="valida" type={type} id={name} name={name} placeholder={placeholder} onChange={handleOnChange} />
    </Container>
)

export default Input;