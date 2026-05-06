'use client';
import style from "./CustomButtonNS.module.css";
interface CustomButtonProps{
    title: string;
    onClick?: () => void;
}
export const CustomButtonNS = (props: CustomButtonProps) => {
    return(
        <button className={style.btn_claro} onClick={props.onClick}>
            {props.title}
        </button>
    );
}