import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import style from './CustomTextArea.module.css';

interface CustomTextAreaProps{
    label: string;
    value: string;
    change?: (e: any) => void;
    name?: string;
}

export const CustomTextArea = (props: CustomTextAreaProps) => {

    const {label, value, change, name} = props;

    return(
        <>
            <FloatingLabel
                controlId="floatingTextarea"
                label={ label }
                className="mb-3"
            >
                <Form.Control 
                    as="textarea" 
                    className={style.textArea} 
                    value={ value } 
                    style={{height: "200px"}} 
                    placeholder="Leave a comment here"
                    onChange={ change }
                    name={ name } 
                    />
            </FloatingLabel>
        </>
    )
}