import style from './CustomContainer.module.css';
import React from 'react';

interface CustomContainerProps{
    children: React.ReactNode;
}

export const CustomContainer = (props: CustomContainerProps) => {

    const {children} = props;

    return(
    <section className={style.container}>
      <div className={style.padding_container}>
          { children }
      </div>
    </section>
    );
}