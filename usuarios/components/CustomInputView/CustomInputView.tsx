"use client";
import style from "./CustomInputView.module.css";
import { CustomInput } from "../CustomInput/CustomInput";
import { useState } from "react";
import { CustomButtonView } from "../CustomButtonView/CustomButtonView";

interface PropsCustomInputView {
  label: string;
  value?: string;
  change?: (e: any) => void;
  name?: string;
  id?: string;
};

export const  CustomInputView = ( props: PropsCustomInputView) => {
  const [mostrar, setMostrar] = useState(false);
  return (
    
    <div className={style.inserir_senha_container}>
      <CustomInput label={props.label} type={mostrar ? "text" : "password"} change={props.change} name={props.name} value={props.value}/>
      <CustomButtonView onClick={() => setMostrar(!mostrar)} />  
    </div>
  );
}
