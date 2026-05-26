import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import style from './CustomTextArea.module.css';

interface CustomTextAreaProps{
    label: string;
}

export const CustomTextArea = (props: CustomTextAreaProps) => {

    const {label} = props;

    return(
        <>
            <FloatingLabel
                controlId="floatingTextarea"
                label={ label }
                className="mb-3"
            >
                <Form.Control as="textarea" className={style.textArea} style={{height: "200px"}} placeholder="Leave a comment here" />
            </FloatingLabel>
        </>
    )
}