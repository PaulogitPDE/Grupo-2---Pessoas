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

  const {label, change, name, value} = props;

  return (
    
    <div className={style.inserir_senha_container}>
      <CustomInput label={ label } type={mostrar ? "text" : "password"} change={ change } name={ name } value={ value }/>
      <CustomButtonView onClick={() => setMostrar(!mostrar)} />  
    </div>
  );
}
