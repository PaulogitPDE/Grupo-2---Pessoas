import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import style from "./CustomInput.module.css";
import { IMaskInput } from 'react-imask';

interface CustomInputProps{
    label: string;
    type?: string;
    change?: (e: any) => void;
    value?: string;
    name?: string;
    mask?: string;
}

export const CustomInput = (props: CustomInputProps) => {

    return(
        <>
           <FloatingLabel
            controlId="floatingInput"
            label={props.label}
            className="mb-3"
            >
                <Form.Control 
                type={props.type} 
                name={props.name} 
                className={style.input} 
                placeholder="name@example.com" 
                value={props.value} 
                onChange={props.change} 
                as={IMaskInput}
                mask={props.name === "telefone" ? "+55 (00) 00000-0000" 
                    : props.name === "cpf" ? "000.000.000-00" 
                    : props.name === "cnpj" ? "00.000.000/0000-00" 
                    : props.name === "cep" ? "00000-000" 
                    : undefined
                    } />
            </FloatingLabel> 
        </>
    );
}