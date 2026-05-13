import style from "./CustomTextAlert.module.css";


interface CustomTextAlertProps{
    text: string;
}

export const CustomTextAlert = (props: CustomTextAlertProps) => {

    return(
        <div className={style.containerAlert}>
            <img src="/img/foto_alerta.jpeg" alt="" className={style.foto_alerta} />
            <p className={style.paragraph_alert}>{props.text}</p>
        </div>
    );
}