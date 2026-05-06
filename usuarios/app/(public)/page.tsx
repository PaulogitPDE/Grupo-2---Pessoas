'use client'
import React from "react";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { CustomContainerTitle } from "@/components/CustomContainerTitle/CustomContainerTitle";
import { CustomInput } from "@/components/CustomInput/CustomInput";
import {CustomInputView} from "@/components/CustomInputView/CustomInputView";   
import { useRouter } from 'next/navigation';

export default function MainVisitante(){

    const router = useRouter();

    return(
        <>
            <CustomContainerTitle title="Bem-Vindo(a)!">
                <a href="/"><img src="/img/logo_Bem-EstarAnimal.png" alt="Logo" className="img-fluid" style={{ maxWidth: "350px", padding: "30px"}} /></a>
                <div style={{textAlign:"left"}}>
                    <CustomInput label="E-mail | CPF | CNPJ" type="text"/>
                    <CustomInputView label="Senha" id="senha" placeholder="Digite sua senha"/>
                </div>
                <CustomButton title="FAZER LOGIN" onClick={() => router.push('/')} />
                <br></br>
                <br></br>
                <p><a href="/Esq_senha" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">Esqueceu sua senha?</a></p>
                <p>Ainda não possui uma conta? <a href="/Cadastro" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">Cadastrar-se</a></p>
            </CustomContainerTitle>
        </>
    );  
}