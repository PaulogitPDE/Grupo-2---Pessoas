import style from "./CustomButton.module.css";
interface CustomButtonProps{
    title: string;
    onClick?: () => void;
    className?: string;
}
export const CustomButton = (props: CustomButtonProps) => {
    return(
        <button className={"btn "+ style[props.className || 'btn_laranja']} onClick={props.onClick}>
            {props.title}
        </button>
    );
}