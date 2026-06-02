'use client'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import style from "./CustomButtonNotification.module.css";
import { IMaskInput } from 'react-imask';
import { ErrorMessage } from 'formik';

interface CustomButtonNotificationProps{
    text: string;
    value: number;
}

export const CustomButtonNotification = (props: CustomButtonNotificationProps) => {

    const { text } = props;

    return(
        <>
          <div className={style.noticationContainer}>
            <p className={style.p}>{text}</p>
            <span className={`material-symbols-rounded`}>notifications</span>
            <p className={`${style.p} ${style.value}`}>{props.value}</p>
          </div>
        </>
    );
}