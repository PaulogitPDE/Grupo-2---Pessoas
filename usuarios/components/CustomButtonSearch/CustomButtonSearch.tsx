"use client";
import style from "./CustomButtonSearch.module.css";
import { useState } from "react";

interface PropsCustomButtonSearch { 
  onClick: () => void;
};

export const  CustomButtonSearch = ( props: PropsCustomButtonSearch) => {
  const [mostrar, setMostrar] = useState(true);
  return (
        <button  type="button" className={style.btn_olho} onClick={() => props.onClick()} >
          <img src="/img/lupa.svg" alt="Mostrar senha" />
        </button>
  );
}