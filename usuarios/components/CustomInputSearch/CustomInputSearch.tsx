"use client";
import style from "./CustomInputSearch.module.css";
import { CustomInput } from "../CustomInput/CustomInput";
import { useState } from "react";
import { CustomButtonSearch } from "../CustomButtonSearch/CustomButtonSearch";

interface PropsCustomInputSearch {
  label: string;
  id?: string;
  placeholder?: string;
  name?: string;
  onClick?: () => void;
  change?: (e: any) => void;
  value?: string;
};

export const  CustomInputSearch = ( props: PropsCustomInputSearch) => {

  const {label, name, change, value, onClick} = props;

  
  
  return (
    
    <div className={style.inserir_senha_container}>
      <CustomInput label={ label } type="text" name={ name } value={ value } change={ change } />
      <CustomButtonSearch onClick={() => onClick} />  
    </div>
  );
}
