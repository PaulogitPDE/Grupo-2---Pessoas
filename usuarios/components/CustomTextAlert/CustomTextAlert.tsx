import style from "./CustomTextAlert.module.css";

interface CustomTextAlertProps{
    text: string;
}

export const CustomTextAlert = (props: CustomTextAlertProps) => {

    return(
        <div className={style.containerAlert}>
            <p style={{margin:"0"}}>{props.text}</p>
        </div>
    );
}