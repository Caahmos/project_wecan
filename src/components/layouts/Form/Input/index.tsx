import React from "react";

import {
    Container
} from './styles'

interface IInputProps {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInputProps> = ({ label, name, type, placeholder, handleOnChange }) => (
    <Container>
        <label htmlFor={name}>{label}</label>
        <input type={type} id={name} name={name} placeholder={placeholder} onChange={handleOnChange} required />
    </Container>
)

export default Input;