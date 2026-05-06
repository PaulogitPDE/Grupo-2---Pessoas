"use client";
import style from "./CustomInputView.module.css";
import { CustomInput } from "../CustomInput/CustomInput";
import { useState } from "react";
import { CustomButtonView } from "../CustomButtonView/CustomButtonView";

interface PropsCustomInputView {
  label: string;
  id: string;
  placeholder: string;
};

export const  CustomInputView = ( props: PropsCustomInputView) => {
  const [mostrar, setMostrar] = useState(false);
  return (
    
    <div className={style.inserir_senha_container}>
      <CustomInput label={props.label} type={mostrar ? "text" : "password"}/>
      <CustomButtonView onClick={() => setMostrar(!mostrar)} />  
    </div>
  );
}
