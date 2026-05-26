import style from "./CustomTextAlert.module.css";


interface CustomTextAlertProps{
    text: string;
}

export const CustomTextAlert = (props: CustomTextAlertProps) => {

    const {text} = props;

    return(
        <div className={style.containerAlert}>
            <img src="/img/foto_alerta.png" alt="" className={style.foto_alerta} />
            <p className={style.paragraph_alert}>{ text }</p>
        </div>
    );
}