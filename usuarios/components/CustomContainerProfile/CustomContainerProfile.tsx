import style from './CustomContainerProfile.module.css';
import React from 'react';

interface CustomContainerProfileProps{
    children: React.ReactNode;
    title?: string;
    id?: string;
}

export const CustomContainerProfile = (props: CustomContainerProfileProps) => {
  
  const {children, title, id} = props;

    return(
    <section className={style.container}>

      <div className={style.padding_container}>
        <h1 style={{color: "#348888"}}> {title} </h1>
        <div className={style.flex} id={ id } style={id === "adocao" ? {flexDirection: 'column'} : undefined}> { children } </div>
      </div>
    </section>
    );
}