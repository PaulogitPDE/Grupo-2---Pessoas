"use client";
import style from "./CustomButtonView.module.css";
import { useState } from "react";

interface PropsCustomButtonView {
  label: string;
  id: string;
  placeholder: string;
};

export const  CustomButtonView = ( props: PropsCustomButtonView) => {
  const [mostrar, setMostrar] = useState(false);
  return (
    
    <div className="inserir-senha-container">
        <button  type="button" className="btn-olho" onClick={() => setMostrar(!mostrar)}>
          <img src={mostrar ? "/img/vis_on.svg" : "/img/vis_off.svg"} alt="Mostrar senha" />
        </button>
    </div>
  );
}