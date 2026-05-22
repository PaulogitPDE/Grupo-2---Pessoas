"use client";
import style from "./CustomCheckbox.module.css";
import { useState } from "react";

interface PropsCustomCheckbox { 
  value: string;
  text: string;
};

export const  CustomCheckbox = ( props: PropsCustomCheckbox) => {
  return (
      <div>
        <input type="checkbox" value={props.value} name={props.text} />
        <label htmlFor={props.text}>{props.text}</label>
      </div>  
  );
}