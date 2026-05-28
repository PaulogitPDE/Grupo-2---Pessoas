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
    change?: (e: any) => void;
}

export const CustomInputEdit = (props: CustomInputEditProps) => {

    const [isEditable, setIsEditable] = useState(false);

    const handleButtonEdit = () => {
        setIsEditable(true);
    }

    const handleButtonSave = () => {
        setIsEditable(false)
    };    

    const {label, type, onClick, value, name, change} = props;

    return(
        <>
            <div className={style.input_edit}>
                <div style={{width: "100%"}}>
                    <CustomInput
                        label={ label }
                        type={ type }
                        value={ value }
                        name={ name }
                        readOnly={isEditable ? false : undefined} 
                        change={ change }></CustomInput>
                </div>
                <CustomButtonEdit src={isEditable === true ? "/img/cancel.svg" : "/img/edit.svg"} onClick={ handleButtonEdit } />
            </div>
            <div style={isEditable === true ? {display: "flex", justifyContent: "center", marginBottom: "10px"} : {display: "none"}}>
                <CustomButton title="Salvar" onClick={ handleButtonSave }></CustomButton>
            </div>
        </>
    );
}