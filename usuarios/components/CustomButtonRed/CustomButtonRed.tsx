import style from "./CustomButtonRed.module.css";
interface CustomButtonRedProps{
    title: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    name?: string;
}
export const CustomButtonRed = (props: CustomButtonRedProps) => {

    const {onClick, type, title, name} = props;

    return(
        <button 
            className={style.btn_red} 
            onClick={ onClick } 
            name={ name } 
            type={ type } 
            style={name === "redefSenhaConta" ? {height: "80%"} : undefined}>
            { title }
        </button>
    );
}