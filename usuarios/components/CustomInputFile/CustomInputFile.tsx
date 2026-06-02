'use client'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import style from "./CustomInputFile.module.css";

interface CustomInputProps{
    label: string;
    change?: (e: any) => void;
    value?: string | number;
    name?: string;
    error?: string;
    id: string;
}

export const CustomInputFile = (props: CustomInputProps) => {

    const {label, name, value, change, error, id} = props;

    return(
        <>
           <Form.Group>
               <Form.Label
                    className={style.label}
                    htmlFor={ id }>
                        { label }
                </Form.Label>
                <Form.Control
                name={ name }
                type="file"
                id={ id }
                className={style.input}
                value={ value }
                onChange={ change }
                isInvalid={ !!error } />
           </Form.Group>
            
        </>
    );
}