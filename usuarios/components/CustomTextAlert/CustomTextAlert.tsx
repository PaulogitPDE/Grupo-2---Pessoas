import style from "./CustomTextAlert.module.css";
import foto_alerta from "@/app/public/img/foto_alerta.jpeg";

interface CustomTextAlertProps{
    text: string;
}

export const CustomTextAlert = (props: CustomTextAlertProps) => {

    return(
        <div className={style.containerAlert}>
            <img src={style.foto_alerta} alt="" />
            <p style={{margin:"0"}}>{props.text}</p>
        </div>
    );
}