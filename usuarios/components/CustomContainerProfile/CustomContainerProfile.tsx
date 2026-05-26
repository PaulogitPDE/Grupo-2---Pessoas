import style from './CustomContainerProfile.module.css';
import React from 'react';

interface CustomContainerProfileProps{
    children: React.ReactNode;
}

export const CustomContainerProfile = (props: CustomContainerProfileProps) => {
  
  const children = props.children;

    return(
    <section className={style.container}>
      <div className={style.padding_container}>
        { children }
      </div>
    </section>
    );
}