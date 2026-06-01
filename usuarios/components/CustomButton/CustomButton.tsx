import style from "./CustomButton.module.css";
interface CustomButtonProps{
    title: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    name?: string;
}
export const CustomButton = (props: CustomButtonProps) => {

    const {onClick, type, title, name} = props;

    return(
        <button 
            className={style.btn_laranja} 
            onClick={ onClick } 
            name={ name } 
            type={ type } 
            style={name === "redefSenhaConta" ? {height: "80%"} : undefined}>
            { title }
        </button>
    );
}