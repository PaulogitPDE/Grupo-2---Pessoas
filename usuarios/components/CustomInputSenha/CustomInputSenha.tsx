"use client";
import { CustomInput } from "../CustomInput/CustomInput";
import "./CustomInputSenha.css";
import { useState } from "react";

interface PropsCustomInputSenha {
  label: string;
  id: string;
  placeholder: string;
};

export const  CustomInputSenha = ( props: PropsCustomInputSenha) => {
  const [mostrar, setMostrar] = useState(false);
  return (
    
    <div className="inserir-senha-container">
      <CustomInput className="input-senha" label={props.label} type={mostrar ? "text" : "password"}/>
        <button  type="button" className="btn-olho" onClick={() => setMostrar(!mostrar)}>
          <img src={mostrar ? "/img/vis_on.svg" : "/img/vis_off.svg"} alt="Mostrar senha" />
        </button>
    </div>
  );
}
