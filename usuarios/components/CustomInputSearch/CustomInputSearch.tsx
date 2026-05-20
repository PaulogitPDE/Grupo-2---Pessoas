"use client";
import style from "./CustomInputSearch.module.css";
import { CustomInput } from "../CustomInput/CustomInput";
import { useState } from "react";
import { CustomButtonSearch } from "../CustomButtonSearch/CustomButtonSearch";

interface PropsCustomInputSearch {
  label: string;
  id: string;
  placeholder: string;
  name?: string;
  onClick?: () => void;
};

export const  CustomInputSearch = ( props: PropsCustomInputSearch) => {
  
  return (
    
    <div className={style.inserir_senha_container}>
      <CustomInput label={props.label} type="text" name={props.name} />
      <CustomButtonSearch onClick={() => props.onClick} />  
    </div>
  );
}
