"use client";
import style from "./CustomInputSearch.module.css";
import { CustomInput } from "../CustomInput/CustomInput";
import { useState } from "react";
import { CustomButtonSearch } from "../CustomButtonSearch/CustomButtonSearch";

interface PropsCustomInputSearch {
  label: string;
  id: string;
  placeholder: string;
};

export const  CustomInputSearch = ( props: PropsCustomInputSearch) => {
  const [mostrar, setMostrar] = useState(false);
  return (
    
    <div className={style.inserir_senha_container}>
      <CustomInput label={props.label} type={mostrar ? "text" : "password"}/>
      <CustomButtonSearch onClick={() => setMostrar(!mostrar)} />  
    </div>
  );
}
