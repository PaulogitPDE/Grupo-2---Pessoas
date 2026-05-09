import style from "./CustomButton.module.css";
interface CustomButtonProps{
    title: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}
export const CustomButton = (props: CustomButtonProps) => {
    return(
        <button className={style.btn_laranja} onClick={props.onClick} type={props.type}>
            {props.title}
        </button>
    );
}