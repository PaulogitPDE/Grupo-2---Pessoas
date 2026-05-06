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
            <CustomContainer title="Bem-Vindo(a)!">
                <a href="/"><img src="/img/logo_Bem-EstarAnimal.png" alt="Logo" className="img-fluid" style={{ maxWidth: "350px", padding: "30px"}} /></a>
                <div style={{textAlign:"left"}}>
                    <label style={{fontSize:"20px"}}>Login</label>
                    <CustomInput label="E-mail | CPF | CNPJ" type="text"/>
                    <label style={{fontSize:"20px"}}>Senha</label>
                    <CustomInputView label="Senha" id="senha" placeholder="Digite sua senha"/>
                </div>
                <CustomButton title="FAZER LOGIN" onClick={() => { window.location.href = '/'; }} />
                <br></br>
                <br></br>
                <p><a href="/Esq_senha"  className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">Esqueceu sua senha?</a></p>
                <p>Ainda não possui uma conta? <a href="/Cadastro_Inicial" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">Cadastrar-se</a></p>
            </CustomContainer>
        </>
    );  
}