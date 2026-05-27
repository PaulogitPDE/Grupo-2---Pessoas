'use client';
import { useState } from "react";
import { CustomButtonEdit } from "../CustomButtonEdit/CustomButtonEdit";
import { CustomInput } from "../CustomInput/CustomInput";
import style from "./CustomInputEdit.module.css";
import { CustomButton } from "../CustomButton/CustomButton";

interface CustomInputEditProps{
    label: string;
    type: string;
    onClick?: () => void;
    value: string;
    name?: string;
}

export const CustomInputEdit = (props: CustomInputEditProps) => {

    const [isEditable, setIsEditable] = useState(false);

    const [mostrar, setMostrar] = useState(true);


    const handleButtonClick = () => {
        
        setIsEditable(true);


    }

    const {label, type, onClick, value, name} = props;

    return(
        <>
            <div className={style.input_edit}>
                <CustomInput 
                    label={ label } 
                    type={ type } 
                    value={ value } 
                    name={ name }
                    readOnly={isEditable ? false : undefined} ></CustomInput>
                <CustomButtonEdit src={isEditable === true ? "/img/cancel.svg" : "/img/edit.svg"} onClick={ handleButtonClick }></CustomButtonEdit>
            </div>
            <div style={isEditable === true ? {display: "flex", justifyContent: "center"} : {display: "none"}}>
                <CustomButton title="Salvar"></CustomButton>
            </div>
        </>
    );
}