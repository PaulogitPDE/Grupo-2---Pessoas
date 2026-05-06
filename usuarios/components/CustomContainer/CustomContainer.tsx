import style from './CustomContainer.module.css';
import React from 'react';

interface CustomContainerProps{
    children: React.ReactNode;
}

export const CustomContainer = (props: CustomContainerProps) => {
    return(
    <section className={style.container}>
      <div className={style.padding_container}>
          {props.children}
      </div>
    </section>
    );
}