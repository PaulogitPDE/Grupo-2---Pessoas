'use client';
import style from './CustomContainerAdocao.module.css';

interface CustomContainerAdocaoProps{
    title: string;
    children: React.ReactNode;
}

export const CustomContainerAdocao = (props: CustomContainerAdocaoProps) => {

    const {title, children} = props;

    return(
        <section className={style.container}>

            <div className={style.padding_container}>
                <h1 style={{color: "#348888"}}> {title} </h1>
                <div className={style.flex}> { children } </div>
            </div>
        </section>
    );
}