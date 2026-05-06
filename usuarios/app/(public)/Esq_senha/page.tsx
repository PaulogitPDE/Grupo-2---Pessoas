'use client'
import React from "react";
import { useState } from "react";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import {CustomContainer} from "@/components/CustomContainer/CustomContainer";
import { CustomInput } from "@/components/CustomInput/CustomInput";
import { CustomTextAlert } from "@/components/CustomTextAlert/CustomTextAlert";
import { CustomButtonNS } from "@/components/CustomButtonNS/CustomButtonNS";



export default function MainEsqSenha(){
  const [tipo, setTipo] = useState<'email' | 'sms'>('email');

    return(
        <>
            <CustomContainer title="Esqueceu sua senha?">
                <div className="container lead " style={{maxWidth: "700px", padding: "16px", fontSize: "30px"}}>
                    <p>Para redefinir sua senha, por favor, insira o <span style={{color:"var(--cor-vermelho)"}} className="fw-bold" >e-mail </span >ou <span style={{color:"var(--cor-vermelho)"}} className="fw-bold">número de telefone</span> cadastrado.</p>
                </div>
                <div className="container gap-3" style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "20px"}}> 
                    <div className="container gap-3" style={{display: "flex", justifyContent: "center", gap: "20px"}}>
                        {tipo === 'email' && (
                            <>
                                <CustomButton title="E-mail" onClick={() => setTipo('email')}/>
                                <CustomButtonNS title="sms" onClick={() => setTipo('sms')}/>
                            </>
                        )}

                        {tipo === 'sms' && (
                            <>
                                <CustomButtonNS title="E-mail" onClick={() => setTipo('email')}/>
                                <CustomButton title="sms" onClick={() => setTipo('sms')}/>
                            </>
                        )}
                    </div>
                    <div style={{textAlign:"left", maxWidth: "400px" }}>          
                        {tipo === 'email' && (
                            <>
                                <CustomInput label="E-mail" type="text" />
                            </>
                        )}

                        {tipo === 'sms' && (
                            <>
                                <CustomInput label="Número de telefone" type="text" />
                            </>
                        )}
                    </div>
                </div> 
                <div className="container">
                        <CustomTextAlert text="Enviaremos um link em seu E-mail ou SMS, para que você possa redefinir a sua senha!"/>
                </div>
                <div className="container" style={{padding:"2em"}}>
                    <CustomButton title="enviar link" onClick={() => { window.location.href = '/Ref_senha'; }}/>
                </div>  
            </CustomContainer>
        </>
    );  
}