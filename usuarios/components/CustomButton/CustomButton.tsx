import style from "./CustomButton.module.css";
interface CustomButtonProps{
    title: string;
    onClick?: () => void;
}
export const CustomButton = (props: CustomButtonProps) => {
    return(
        <button className={style.btn_laranja} onClick={props.onClick}>
            {props.title}
        </button>
    );
}