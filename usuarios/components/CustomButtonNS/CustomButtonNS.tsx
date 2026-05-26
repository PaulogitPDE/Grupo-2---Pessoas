'use client';
import style from "./CustomButtonNS.module.css";
interface CustomButtonProps{
    title: string;
    onClick?: () => void;
}
export const CustomButtonNS = (props: CustomButtonProps) => {

    const {title, onClick} = props;

    return(
        <button className={style.btn_claro} onClick={ onClick }>
            { title }
        </button> 
    );
}