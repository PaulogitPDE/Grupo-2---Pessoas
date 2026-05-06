"use client";
import style from "./CustomButtonView.module.css";
import { useState } from "react";

interface PropsCustomButtonView { 
  onClick: () => void;
};

export const  CustomButtonView = ( props: PropsCustomButtonView) => {
  const [mostrar, setMostrar] = useState(true);
  return (
        <button  type="button" className={style.btn_olho} onClick={() => { props.onClick(); setMostrar(!mostrar); }} >
          <img src={mostrar ? "/img/vis_on.svg" : "/img/vis_off.svg"} alt="Mostrar senha" />
        </button>
  );
}