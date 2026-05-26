import style from "./CustomButton.module.css";
interface CustomButtonProps{
    title: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}
export const CustomButton = (props: CustomButtonProps) => {

    const {onClick, type, title} = props;

    return(
        <button className={style.btn_laranja} onClick={ onClick } type={ type }>
            { title }
        </button>
    );
}