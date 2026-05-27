import { useState } from "react";
import style from "./CustomButtonEdit.module.css"

interface CustomButtonEditProps{
    onClick?: () => void;
    src: string;
}

export const CustomButtonEdit = (props: CustomButtonEditProps) => {

    const [mostrar, setMostrar] = useState(true);

    const {onClick, src} = props;
    

    return(
        <button type="button" className={style.btn_edit} onClick={ onClick } >
          <img 
            src={src}
            alt="Mostrar senha"  />
        </button>
    )
}