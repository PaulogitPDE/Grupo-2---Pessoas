import style from './CustomContainerProfile.module.css';
import React from 'react';

interface CustomContainerProfileProps{
    children: React.ReactNode;
}

export const CustomContainerProfile = (props: CustomContainerProfileProps) => {
    return(
    <section className={style.container}>
      <div className={style.padding_container}>
          {props.children}
      </div>
    </section>
    );
}