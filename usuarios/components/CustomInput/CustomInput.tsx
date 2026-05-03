import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

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
                <Form.Control type={props.type} placeholder="name@example.com" />
            </FloatingLabel> 
        </>
    );
}