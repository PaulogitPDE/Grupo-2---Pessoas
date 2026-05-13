import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import style from "./CustomInput.module.css";

interface CustomInputProps{
    label: string;
    type: string;
    change?: (e: any) => void;
    value?: string;
    name?: string;
}

export const CustomInput = (props: CustomInputProps) => {

    return(
        <>
           <FloatingLabel
            controlId="floatingInput"
            label={props.label}
            className="mb-3"
            >
                <Form.Control type={props.type} name={props.name} className={style.input} placeholder="name@example.com" value={props.value} onChange={props.change} />
            </FloatingLabel> 
        </>
    );
}