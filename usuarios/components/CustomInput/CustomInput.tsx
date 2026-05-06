import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import style from "./CustomInput.module.css";

interface CustomInputProps{
    label: string;
    type: string;
}

export const CustomInput = (props: CustomInputProps) => {

    return(
        <>
           <FloatingLabel
            controlId="floatingInput"
            label={props.label}
            className="mb-3"
            >
                <Form.Control type={props.type} className={style.input} placeholder="name@example.com" />
            </FloatingLabel> 
        </>
    );
}