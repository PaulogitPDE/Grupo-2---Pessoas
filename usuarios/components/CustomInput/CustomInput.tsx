'use client'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import style from "./CustomInput.module.css";
import { IMaskInput } from 'react-imask';
import { ErrorMessage } from 'formik';

interface CustomInputProps{
    label: string;
    type: string;
    change?: (e: any) => void;
    value?: string | number;
    name?: string;
    mask?: string;
    error?: string;
    readOnly?: boolean;
    step?: string;
}

export const CustomInput = (props: CustomInputProps) => {

    const {label, type, name, value, change, error, readOnly, step} = props;

    return(
        <>
           <FloatingLabel
            controlId="floatingInput"
            label={ label }
            className="mb-3"
            >
                <Form.Control 
                type={ type } 
                step={ step }
                name={ name } 
                className={style.input} 
                placeholder="name@example.com" 
                value={ value } 
                style={name === "endereco" ? {width: "95%"} 
                     : name === "bairro" ? {width: "100%"} 
                     : name === "numero" ? {width: "95%"} 
                     : name === "estado" ? {width: "90%"}
                     : name === "cidade" ? {width: "90%"}
                     : name === "nomePerfil" ? {width: "100%"}
                     : undefined}
                onChange={ change }
                isInvalid={ !!error }
                as={IMaskInput}
                mask={name === "telefone" ? "+55 (00) 00000-0000" 
                    : name === "cpf" ? "000.000.000-00" 
                    : name === "cnpj" ? "00.000.000/0000-00"
                    : name === "cep" ? "00000-000"
                    : undefined
                    } 
                readOnly={readOnly !== undefined ? readOnly : name === "nomePerfil"}/>
                <Form.Control.Feedback type='invalid'>
                    { error }
                </Form.Control.Feedback>
            </FloatingLabel>
            
        </>
    );
}