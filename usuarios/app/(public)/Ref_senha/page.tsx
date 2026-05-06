'use client'
import React from "react";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import {CustomContainer} from "@/components/CustomContainer/CustomContainer";
import { CustomInput } from "@/components/CustomInput/CustomInput";
import {CustomInputView} from "@/components/CustomInputView/CustomInputView";
import visionOff from "@/public/img/vis_off.svg";   

export default function MainVisitante(){
    return(
        <>
            <CustomContainer title="Redefinir senha">
                <a href="/"><img src="/img/logo_Bem-EstarAnimal.png" alt="Logo" className="img-fluid" style={{ maxWidth: "350px", padding: "30px"}} /></a>
                <div style={{textAlign:"left"}}>
                    <CustomInputView label="Nova Senha" id="senha" placeholder="Digite sua senha"/>
                    <CustomInputView label="Confirmar Senha" id="confirmar_senha" placeholder="Digite novamente sua senha"/>
                </div>
                <CustomButton title="Redefinir Senha" onClick={() => { window.location.href = "/"; }} />
            </CustomContainer>
        </>
    );  
}