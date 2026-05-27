import style from './CustomButtonCancel.module.css'

interface CustomButtonCancelProps{
    onClick?: () => void
}

export const CustomButtonCancel = (props: CustomButtonCancelProps) => {

    const onClick = props.onClick;

    return(
        
        <button type="button" className={style.btn_cancel} onClick={ onClick } >
            <img src="/img/cancel.svg" alt="Mostrar senha" />
        </button>
    );
}