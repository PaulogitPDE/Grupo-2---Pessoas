import style from './CustomContainer.module.css';
import React from 'react';

interface CustomContainerProps{
    children: React.ReactNode;
    BackgroundColor?: string ;

}

export const CustomContainer = (props: CustomContainerProps) => {

    const {children, BackgroundColor} = props;

    return(
    <section className={style.container}  >
      <div className={style.padding_container} style={{ backgroundColor: BackgroundColor }}>
          { children }
      </div>
    </section>
    );
}