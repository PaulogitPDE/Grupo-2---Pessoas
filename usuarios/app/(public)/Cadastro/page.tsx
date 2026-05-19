'use client';
import { CustomContainer } from "@/components/CustomContainer/CustomContainer";
import { CustomInput } from "@/components/CustomInput/CustomInput";
import style from './Cadastro.module.css';
import { CustomInputView } from "@/components/CustomInputView/CustomInputView";
import { useState } from "react";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { CustomButtonNS } from "@/components/CustomButtonNS/CustomButtonNS";
import { CustomInputSearch } from "@/components/CustomInputSearch/CustomInputSearch";

export default function Cadastro(){

  const [tipo, setTipo] = useState<'PF' | 'PJ'>('PF');

    return(
        <>
            <h1 className={style.title_cad}>Cadastro inicial</h1>
            <CustomContainer>
                {(tipo === 'PF') && (
                    <>
                        <div className={style.container_buttons}>
                            <CustomButton title="Pessoa Física" onClick={() => setTipo('PF')}></CustomButton>
                            <CustomButtonNS title="Pessoa Jurídica" onClick={() => setTipo('PJ')}></CustomButtonNS>
                        </div>
                        <h2 className={style.title_container}>Dados Pessoais</h2>
                        <CustomInput type="text" label="Nome Completo"></CustomInput>
                        <CustomInput type="text" label="CPF" name="cpf"></CustomInput>
                        <CustomInput type="date" label="Data de Nascimento"></CustomInput>
                    </>
                )}
                    
                
                {(tipo === 'PJ') && (
                    <>
                        <div className={style.container_buttons}>
                            <CustomButtonNS title="Pessoa Física" onClick={() => setTipo('PF')}></CustomButtonNS>
                            <CustomButton title="Pessoa Jurídica" onClick={() => setTipo('PJ')}></CustomButton>
                        </div>
                        <h2 className={style.title_container}>Dados Empresariais</h2>
                        <CustomInput type="text" label="Razão Social"></CustomInput>
                        <CustomInput type="text" label="Nome Fantasia"></CustomInput>
                        <CustomInput type="text" label="CNPJ" name="cnpj"></CustomInput>
                    </>
                )}
                    
                
                
                <CustomInput type="text" label="Número de Telefone" name="telefone"></CustomInput>
                <CustomInput type="text" label="E-mail"></CustomInput>
                <CustomInputView label="Senha"></CustomInputView>
                <CustomInputSearch id="CEP" placeholder="Digite seu CEP" label="CEP" name="cep"></CustomInputSearch>
                <div style={{display:"flex", flexDirection:"row", gap:"10px", justifyContent: "baseline"}}>
                    <CustomInput type="text" label="Endereço"></CustomInput>
                    <CustomInput type="text" label="Número"></CustomInput>
                    <CustomInput type="text" label="Complemento"></CustomInput>
                </div>
                <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
                    <CustomInput type="text" label="Bairro"></CustomInput>
                    <CustomInput type="text" label="Cidade"></CustomInput>
                    <CustomInput type="text" label="Estado"></CustomInput>
                </div>
                <CustomInput type="text" label="Complemento"/>
                <CustomButton title="Cadastrar-se" onClick={() => { window.location.href = "/"; }}></CustomButton>
            </CustomContainer>
        </>
    );

}