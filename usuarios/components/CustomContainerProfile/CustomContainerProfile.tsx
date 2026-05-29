import style from './CustomContainerProfile.module.css';
import React from 'react';

interface CustomContainerProfileProps{
    children: React.ReactNode;
    title?: string;
}

export const CustomContainerProfile = (props: CustomContainerProfileProps) => {
  
  const {children, title} = props;

    return(
    <section className={style.container}>

      <div className={style.padding_container}>
        <h1 style={{color: "#348888"}}> {title} </h1>
        <div className={style.flex}> { children } </div>
      </div>
    </section>
    );
}